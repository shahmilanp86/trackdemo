package com.apptracker.service;

import com.apptracker.common.CommonPoperties;
import com.apptracker.entity.OnboardingStatus;
import com.apptracker.repository.OnboardingStatusViewRepsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static com.apptracker.utils.ApptrackerUtils.daysTillDate;

/**
 * Created by Murthy on 11/5/2017.
 */
@Service
public class ExternalServiceImpl implements ExternalService {

    @Autowired
    private OnboardingStatusViewRepsitory viewRepsitory;

    @Override
    public String authenticate(String token) {

        OnboardingStatus status = viewRepsitory.findByUrl(token);

        return Optional.ofNullable(status)
                .filter(this::urlAlive)
                .map(active -> active.getAid())
                .orElse(null);

    }


    private  Boolean urlAlive(OnboardingStatus status) {

        return daysTillDate(status.getUrlCreatedTm()) <= CommonPoperties.CANDIDATE_URL_EXP_DAYS;
    }
}