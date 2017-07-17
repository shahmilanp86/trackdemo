package com.aptrack.schema.service;

import com.aptrack.schema.model.CandidateInfo;
//import com.aptrack.schema.repository.;
import com.aptrack.schema.repository.CandidateInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Collection;

/**
 * Created by Murthy on 7/16/2017.
 */
@Service
public class CandidateServiceImpl implements CandidateService {

    @Autowired
    public CandidateInfoRepository candidateInfoRepository;

    @Override
    public Collection<CandidateInfo> findAll() {
        return candidateInfoRepository.findAll();
    }

    @Override
    public CandidateInfo findOne(Long aid) {
        return candidateInfoRepository.findOne(aid);
    }

    @Override
    public CandidateInfo create(CandidateInfo candidate) {
        return candidateInfoRepository.save(candidate);
    }

    @Override
    public CandidateInfo update(CandidateInfo candidate) {
        return candidateInfoRepository.save(candidate);
    }
}
