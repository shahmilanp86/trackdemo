package com.aptrack.service;

import com.aptrack.entity.ContractInfo;
import com.aptrack.repository.CandidateInfoRepository;
import com.aptrack.entity.CandidateInfo;
//import com.aptrack.schema.repository.;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

import static com.aptrack.utils.ApptrackerUtils.getNullPropertyNames;
import static org.springframework.beans.BeanUtils.copyProperties;

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
       return (CandidateInfo) Optional.ofNullable(candidateInfoRepository.findOne(candidate.getAid()))
                .map(exits -> { throw new UnsupportedOperationException("Aid already exists."); })
                .orElse(candidateInfoRepository.save(candidate));

    }

    @Override
    public CandidateInfo update(CandidateInfo updated) {
        CandidateInfo existing = candidateInfoRepository.findOne(updated.getAid());
        copyProperties(updated,existing, getNullPropertyNames(updated));
        return candidateInfoRepository.save(existing);
    }
}
