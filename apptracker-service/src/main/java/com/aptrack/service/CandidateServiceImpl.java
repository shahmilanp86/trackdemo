package com.aptrack.service;

import com.aptrack.entity.CandidateInfo;
import com.aptrack.entity.OnboardingView;
import com.aptrack.repository.CandidateInfoRepository;
import com.aptrack.repository.OnboardingStatusViewRepsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

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
   // private OnboardingStatusService onboardingStatusService;
    private OnboardingStatusViewRepsitory onboardingStatusRepsitory;

    @Override
    public Collection<CandidateInfo> findAll() {
        return candidateInfoRepository.findAll();
    }

    @Override
    public CandidateInfo get(Long aid) {
        setStat();
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

    public void setStat(){

        /*OnboardingStatus onboardingStatus = new OnboardingStatus();
        onboardingStatus.setAid(3333L);
        onboardingStatus.setBgCheck(600);
        java.util.Date date = new Date();

        onboardingStatus.setBgCheckUpdTm(new Timestamp(date.getTime()));
        onboardingStatus.setComments("Comments789");
        onboardingStatus.setDemograph(900);
        onboardingStatus.setDemographUpdTm(new Timestamp(date.getTime()));
        onboardingStatus.setLastUpdBy("Milan");
        onboardingStatus.setLastUpdTm(new Timestamp(date.getTime()));
        //OnboardingStatusServiceImpl svc = new OnboardingStatusServiceImpl();
        onboardingStatusService.update(onboardingStatus);*/
        List<OnboardingView> in = onboardingStatusRepsitory.findStatus(1111L);
        System.out.print(in);
        List<OnboardingView> in1 = onboardingStatusRepsitory.findStatusAll();
       System.out.print(in1);

  /*      List<OnboardingView> view = onboardingStatusRepsitory.findStatusViewAll();
        System.out.print(view);*/

    }
}
