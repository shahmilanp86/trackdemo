package com.aptrack.service;

import com.aptrack.entity.OnboardingStatus;
//import com.aptrack.repository.OnboardingStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Murthy on 7/22/2017.
 */
@Service
public class OnboardingStatusServiceImpl implements OnboardingStatusService{

/*@Autowired
private OnboardingStatusRepository onboardingStatusRepository;*/


    @Override
    public OnboardingStatus get(Long aid) {

        return null;
        // return onboardingStatusRepository.findOne(aid);
    }

    @Override
    public OnboardingStatus update(OnboardingStatus status) {
        return null;
       //return onboardingStatusRepository.save(status);
    }
}
