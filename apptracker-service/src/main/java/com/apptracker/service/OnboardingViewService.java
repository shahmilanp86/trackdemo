package com.apptracker.service;

import com.apptracker.entity.OnboardingSummaryView;
import com.apptracker.entity.OnboardingView;

import java.util.List;

/**
 * Created by Murthy on 7/23/2017.
 */
public interface OnboardingViewService {

    List<OnboardingView> viewList();
   // OnboardingStatus update(OnboardingStatus status);
    OnboardingSummaryView summary(String aid);
}
