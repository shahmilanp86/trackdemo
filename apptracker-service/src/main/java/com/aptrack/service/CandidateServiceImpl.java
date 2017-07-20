package com.aptrack.service;

import com.aptrack.repository.CandidateInfoRepository;
import com.aptrack.entity.CandidateInfo;
//import com.aptrack.schema.repository.;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Collection;

/**
 * Created by Murthy on 7/16/2017.
 */
@Service
public class CandidateServiceImpl implements CandidateService {

    @Autowired
    private CandidateInfoRepository candidateInfoRepository;

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
