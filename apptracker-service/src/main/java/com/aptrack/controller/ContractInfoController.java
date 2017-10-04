package com.aptrack.controller;

import com.aptrack.entity.ContingentWorkerDetails;
import com.aptrack.entity.ContractInfo;
import com.aptrack.service.ContingentWorkerDetailsService;
import com.aptrack.service.ContractService;
import com.aptrack.utils.ExcelUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<ContingentWorkerDetails> getDetails(@PathVariable("id") Long id) {

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
        ContingentWorkerDetails updatedContract = contingentWorkerDetailsService.update(contract);

      //  ExcelUtils.generate(contract);



        if (updatedContract == null) {
            return new ResponseEntity<ContingentWorkerDetails>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<ContingentWorkerDetails>(updatedContract, HttpStatus.CREATED);
    }


}
