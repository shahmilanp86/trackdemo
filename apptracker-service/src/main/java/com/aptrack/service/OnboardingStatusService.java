package com.aptrack.service;

import com.aptrack.entity.OnboardingStatus;
import com.aptrack.entity.StatusView;

/**
 * Created by Murthy on 7/22/2017.
 */
public interface OnboardingStatusService {

    OnboardingStatus get(Long aid);
    OnboardingStatus update(OnboardingStatus status);
    OnboardingStatus update(Long aid);

    StatusView nextStatus(StatusView statusView);

}
