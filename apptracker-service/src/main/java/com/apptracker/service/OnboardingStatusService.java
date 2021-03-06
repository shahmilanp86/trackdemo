package com.apptracker.service;

import com.apptracker.entity.OnboardingStatus;
import com.apptracker.entity.StatusView;

/**
 * Created by Murthy on 7/22/2017.
 */
public interface OnboardingStatusService {

    OnboardingStatus get(String aid);
    //OnboardingStatus add(OnboardingStatus status);
    OnboardingStatus update(OnboardingStatus status);
    OnboardingStatus update(String aid);

    StatusView nextStatus(StatusView statusView);

    OnboardingStatus add(String aid);
}
