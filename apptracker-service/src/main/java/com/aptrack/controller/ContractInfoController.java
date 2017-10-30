package com.aptrack.controller;

import com.aptrack.entity.ContingentWorkerDetails;
import com.aptrack.entity.ContractInfo;
import com.aptrack.service.ContingentWorkerDetailsService;
import com.aptrack.service.ContractService;
import com.aptrack.utils.ExcelUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Optional;

@RestController
public class ContractInfoController {


    @Autowired
    private ContractService contractService;

    @Autowired
    private ContingentWorkerDetailsService contingentWorkerDetailsService;

   /* @RequestMapping(
            value = "/api/contracts1/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ContractInfo> getContract(@PathVariable("id") Long id) {

        ContractInfo contract = contractService.get(id);
        if (contract == null) {
            return new ResponseEntity<ContractInfo>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<ContractInfo>(contract, HttpStatus.OK);
    }*/

    @RequestMapping(
            value = "/api/contract/",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ContractInfo> createContract(
            @RequestBody ContractInfo contract) {

        ContractInfo savedContract = contractService.create(contract);
        return new ResponseEntity<ContractInfo>(savedContract, HttpStatus.CREATED);
    }


   /* @RequestMapping(
            value = "/api/contract/update/",
            method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ContractInfo> updateContract(
            @RequestBody ContractInfo contract) {

        ContractInfo updatedContract = contractService.update(contract);

        if (updatedContract == null) {
            return new ResponseEntity<ContractInfo>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
       return new ResponseEntity<ContractInfo>(updatedContract, HttpStatus.CREATED);
    }*/


    @RequestMapping(
            value = "/api/contract/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ContingentWorkerDetails> getDetails(@PathVariable("id") String id) {

        ContingentWorkerDetails contingentWorkerDetails = contingentWorkerDetailsService.get(id);
        if (contingentWorkerDetails == null) {
            return new ResponseEntity<ContingentWorkerDetails>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<ContingentWorkerDetails>(contingentWorkerDetails, HttpStatus.OK);
    }


    @RequestMapping(
            value = "/api/contract/update",
            method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ContingentWorkerDetails> updateContract(
            @RequestBody ContingentWorkerDetails contract) {

        //TODO Test
        ExcelUtils.generateWithByteArray(contract);
        ContingentWorkerDetails updatedContract = contingentWorkerDetailsService.update(contract);
        if (updatedContract == null) {
            return new ResponseEntity<ContingentWorkerDetails>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<ContingentWorkerDetails>(updatedContract, HttpStatus.CREATED);
    }


    @RequestMapping(
            value = "/api/contract/download/{id}",
            method = RequestMethod.GET)
    public  @ResponseBody HttpEntity<byte[]> download(@PathVariable("id") String id) throws IOException {

        byte[] document = Optional.ofNullable(contingentWorkerDetailsService.download(id)).map(arr -> arr.toByteArray())
                .orElse(null);


        HttpHeaders header = new HttpHeaders();
       // header.setContentType(new MediaType("application", "pdf"));
       // header.set("Content-Disposition", "inline; filename=" + id);
        header.setContentType(new MediaType("application", "octet-stream"));

        header.set( "Content-Disposition", "Attachment;Filename=\""+id+".xls\"");

        header.setContentLength(document.length);
        return new HttpEntity<byte[]>(document, header);
        // ...
       // ByteArrayResource resource = new ByteArrayResource(contingentWorkerDetailsService.download(id).toByteArray());
/*
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(resource.length())
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(resource);*/
    }


}
