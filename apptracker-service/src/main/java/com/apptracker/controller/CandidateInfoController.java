package com.apptracker.controller;

import com.apptracker.entity.CandidateInfo;
import com.apptracker.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class CandidateInfoController {


    @Autowired
    private CandidateService candidateService;

    @RequestMapping(
            value = "/api/candidate/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<CandidateInfo>> getCandidates() {

        Collection<CandidateInfo> candidates = candidateService.findAll();
        return new ResponseEntity<Collection<CandidateInfo>>(candidates,
                HttpStatus.OK);
    }

    @RequestMapping(
            value = "/api/candidate/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CandidateInfo> getCandidates(@PathVariable("id") String id) {

        CandidateInfo candidate = candidateService.get(id);
        if (candidate == null) {
            return new ResponseEntity<CandidateInfo>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<CandidateInfo>(candidate, HttpStatus.OK);
    }

    @RequestMapping(
            value = "/api/candidate/add",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CandidateInfo> createCandidates(
            @RequestBody CandidateInfo candidate) {

        CandidateInfo savedCandidate = candidateService.create(candidate);

        return new ResponseEntity<CandidateInfo>(savedCandidate, HttpStatus.CREATED);
    }

    @RequestMapping(
            value = "/api/candidate/update",
            method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CandidateInfo> updateCandidate(
            @RequestBody CandidateInfo candidate) {

        CandidateInfo updatedCandidate = candidateService.update(candidate);
        if (updatedCandidate == null) {
            return new ResponseEntity<CandidateInfo>(
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<CandidateInfo>(updatedCandidate, HttpStatus.OK);
    }



}
