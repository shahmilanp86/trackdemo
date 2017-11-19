package com.aptrack.controller;

import com.aptrack.entity.ContingentWorkerDetails;
import com.aptrack.entity.ContractInfo;
import com.aptrack.service.ContingentWorkerDetailsService;
import com.aptrack.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public @ResponseBody
    HttpEntity<byte[]> download(@PathVariable("id") String id) throws IOException {

        byte[] document = Optional.ofNullable(contingentWorkerDetailsService.download(id))
                .map(arr -> arr.toByteArray())
                .orElse(null);


        HttpHeaders header = new HttpHeaders();
        header.setContentType(new MediaType("application", "octet-stream"));

        header.set("Content-Disposition", "Attachment;Filename=\"" + id + ".xlsx\"");

        header.setContentLength(document.length);
        return new HttpEntity<byte[]>(document, header);

    }


}
