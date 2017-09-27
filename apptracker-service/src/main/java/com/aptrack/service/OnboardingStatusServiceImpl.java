package com.aptrack.service;

import com.aptrack.common.Status;
import com.aptrack.entity.OnboardingStatus;
import com.aptrack.repository.OnboardingStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.aptrack.utils.ApptrackerUtils.generateRandomString;

/**
 * Created by Murthy on 7/22/2017.
 */
@Service
public class OnboardingStatusServiceImpl implements OnboardingStatusService {

    //TODO: Move these to properties.
    private static final Integer INITIL_STATUS = Status.AWAITING_CANDIDATE_INFO.getCode();
    private static final String INITIL_COMMENTS = "Candidate was notified.";
    private static final String INITIL_UPDATED_BY = "Admin";
    private static final Integer DEFAULT_BG_CHECK = 100;
    private static final Integer DEFAULT_DEMOGRAPH_CHECK = 200;
    @Autowired
    private OnboardingStatusRepository onboardingStatusRepository;

    @Override
    public OnboardingStatus get(Long aid) {
        return onboardingStatusRepository.findOne(aid);
    }

    @Override
    public OnboardingStatus update(OnboardingStatus status) {

        //TODO null values of DATETIME feilds in DB table tobe fixed.
        return onboardingStatusRepository.save(status);
    }

    @Override
    public OnboardingStatus update(Long aid) {
        return update(initialDetails(aid));
    }


    private OnboardingStatus initialDetails(Long aid) {

        OnboardingStatus initialStatus = new OnboardingStatus();
        initialStatus.setAid(aid);
        initialStatus.setBgCheck(DEFAULT_BG_CHECK);
        initialStatus.setDemograph(DEFAULT_DEMOGRAPH_CHECK);
        initialStatus.setCurrentStatus(INITIL_STATUS);
        initialStatus.setComments(INITIL_COMMENTS);
        initialStatus.setLastUpdBy(INITIL_UPDATED_BY);
        initialStatus.setUrlString(generateRandomString());

        return initialStatus;
    }


}
