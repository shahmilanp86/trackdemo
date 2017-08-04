package com.aptrack.utils;

import com.aptrack.common.Status;
import com.aptrack.entity.OnboardingStatus;
import com.aptrack.entity.OnboardingView;
import com.aptrack.service.OnboardingViewService;
import com.aptrack.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.Optional;

import static com.aptrack.utils.ApptrackerUtils.dateTimeDiffDays;
import static com.aptrack.utils.ApptrackerUtils.daysTillDate;

import static com.aptrack.utils.ApptrackerUtils.dateTimeTotring;
import static com.aptrack.common.CommonPoperties.NO_SLA;

/**
 * Created by Murthy on 7/29/2017.
 */
@Slf4j
public class OnboardingProcessor {
    //TODO: Implementaion Inprogrss.
    //TODO: Testing is due
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
                .filter(this::exceededSLA)
                .forEach(status -> notifyWithEmail(status));
    }

    private void notifyWithEmail(OnboardingView status) {
        log.debug("Notifying....{}",status);
    }

    private Boolean exceededSLA(OnboardingView onboardingView) {
        return Optional.ofNullable(onboardingView.getOnboardingStatus())
                .filter(this::hasSLA)
                .map(status -> daysTillDate(status.getCurrentStatusUpdTm()))
                .filter(days -> days >= Status.valueFrom(onboardingView.getOnboardingStatus().getCurrentStatus()).getSla())
                .map(yes -> true)
                .orElse(false);
    }

    private boolean hasSLA(OnboardingStatus status){
         return Optional.ofNullable(status)
                .map(st -> st.getCurrentStatus() )
                .filter(st -> Status.valueFrom(st).getSla()== NO_SLA)
                .map(yes -> false)
                .orElse(true);
    }



}
