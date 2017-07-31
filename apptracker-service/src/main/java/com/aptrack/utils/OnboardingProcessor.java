package com.aptrack.utils;

import com.aptrack.service.OnboardingViewService;
import com.aptrack.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.function.Predicate;

/**
 * Created by Murthy on 7/29/2017.
 */
public class OnboardingProcessor {
    //TODO: Implementaion Inprogrss.

    @Autowired
    private UserService userService;
    @Autowired
    private OnboardingViewService onboardingViewService;

    // Get All in process records
    //For each record(candidate)
        // If status.sla > 0
            // if  ~(current timestamp, updated db status tm )days > status.sla
                    // if (~(current timestamp, updated db status tm )days - status.sla) >2 -- Escalation
                            //add managers in the cc list
                    // notify to (status.roles and CC) with AID, CandidateName, CurrentStatus and Latstupdated dtm


        public void process(){
            onboardingViewService.viewList()
                    .stream()
                   ;
        }




}
