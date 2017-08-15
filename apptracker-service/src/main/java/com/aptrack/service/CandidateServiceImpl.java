package com.aptrack.service;

import com.aptrack.entity.CandidateInfo;
import com.aptrack.repository.CandidateInfoRepository;
import com.aptrack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import static com.aptrack.utils.ApptrackerUtils.getNullPropertyNames;
import static org.springframework.beans.BeanUtils.copyProperties;

//import com.aptrack.schema.repository.;

/**
 * Created by Murthy on 7/16/2017.
 */
@Service
public class CandidateServiceImpl implements CandidateService {

    @Autowired
    private CandidateInfoRepository candidateInfoRepository;

    @Autowired
    private OnboardingStatusService onboardingStatusService;
    //private OnboardingStatusViewRepsitory onboardingStatusRepsitory;

    @Override
    public Collection<CandidateInfo> findAll() {
        return candidateInfoRepository.findAll();
    }

    @Override
    public CandidateInfo get(Long aid) {

        return candidateInfoRepository.findOne(aid);
    }

    @Override
    @Transactional
    public CandidateInfo create(CandidateInfo candidate) {
        return (CandidateInfo) Optional.ofNullable(candidateInfoRepository.findOne(candidate.getAid()))
                .map(exits -> {
                    throw new UnsupportedOperationException("Aid already exists.");
                })
                .orElse(saveDetails(candidate));

    }

    private CandidateInfo saveDetails(CandidateInfo candidate) {
        CandidateInfo candidateInfo = candidateInfoRepository.save(candidate);
        //TODO null values of DATETIME feilds in DB table tobe fixed.
        onboardingStatusService.update(candidate.getAid());
        return candidateInfo;
    }

    @Override
    public CandidateInfo update(CandidateInfo updated) {
        CandidateInfo existing = candidateInfoRepository.findOne(updated.getAid());
        copyProperties(updated, existing, getNullPropertyNames(updated));
        return candidateInfoRepository.save(existing);
    }



    private void setStat() {

       /* Integer[] r = {100,101,102};
        List<Integer> f = Arrays.stream(r).collect(Collectors.toList());
        tempSvc.findByRole(f);*/

    }
}
