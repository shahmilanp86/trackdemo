package com.aptrack.utils;

import com.aptrack.common.Status;
import com.aptrack.entity.OnboardingStatus;
import com.aptrack.entity.OnboardingView;
import com.aptrack.service.OnboardingViewService;
import com.aptrack.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static com.aptrack.common.CommonPoperties.NO_SLA;
import static com.aptrack.utils.ApptrackerUtils.daysTillDate;
import static java.util.stream.Collectors.toList;

/**
 * Created by Murthy on 7/29/2017.
 */
@Slf4j
@Service
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


    public void process() {
        onboardingViewService.viewList()
                .stream()
                .filter(this::exceededSLA)
                .forEach(status -> notifyWithEmail(status));
    }

    private void notifyWithEmail(OnboardingView status) {
        //System.out.println("Notifying....{}, {}, {}",status.getAid(),status.getEmail(),Status.valueFrom(status.getOnboardingStatus().getCurrentStatus()).getRoles());
        System.out.println(String.format("Notifying....%s, %s, %s", status.getAid(), status.getEmail(),
                roleEmailIds(status.getOnboardingStatus().getCurrentStatus())));


    }

    private List<String> roleEmailIds(Integer statusCode) {
        return userService.getUsers(toRoleCodes(statusCode))
                .stream()
                .map(user -> user.getEmail())
                .collect(toList());
    }

    private List<Integer> toRoleCodes(Integer statusCode) {
        return Arrays.asList(Status.valueFrom(statusCode).getRoles())
                .stream()
                .map(role -> role.getCode())
                .collect(toList());
    }

    private Boolean exceededSLA(OnboardingView onboardingView) {
        return Optional.ofNullable(onboardingView.getOnboardingStatus())
                .filter(this::hasSLA)
                .map(status -> daysTillDate(status.getCurrentStatusUpdTm()))
                .filter(days -> days >= Status.valueFrom(onboardingView.getOnboardingStatus().getCurrentStatus()).getSla())
                .map(yes -> true)
                .orElse(false);
    }

    private boolean hasSLA(OnboardingStatus status) {
        return Optional.ofNullable(status)
                .map(st -> st.getCurrentStatus())
                .filter(st -> Status.valueFrom(st).getSla() != NO_SLA)
                .map(yes -> true)
                .orElse(false);
    }


}
