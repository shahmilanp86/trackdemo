package com.apptracker.service;

import com.apptracker.entity.OnboardingSummaryView;
import com.apptracker.entity.OnboardingView;
import com.apptracker.repository.OnboardingStatusViewRepsitory;
import com.apptracker.utils.OnboardingProcessor;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Created by Murthy on 7/23/2017.
 */
@Service
public class OnboardingViewServiceImpl implements OnboardingViewService {

    @Autowired
    private OnboardingStatusViewRepsitory viewRepsitory;

    @Override
    public List<OnboardingView> viewList() {
        return Optional.ofNullable(viewRepsitory.findStatusAll())
                .orElse(Lists.<OnboardingView>newArrayList())
                .stream()
                .map(this::setSLA)
                .collect(Collectors.toList());
    }

    @Override
    public OnboardingSummaryView summary(String aid) {
        return viewRepsitory.findStatusSummary(aid);
    }

    private OnboardingView setSLA(OnboardingView view){

       return  Optional.ofNullable(view.getOnboardingStatus())
               .map(st -> {
                   System.out.println(st);
                   st.setCurrentSLA(OnboardingProcessor.dueSLADays(st));
                   view.setOnboardingStatus(st);
                   return view;
               })
       .orElse(view);


    }
}
