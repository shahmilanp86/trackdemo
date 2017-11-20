package com.apptracker.service;

import com.apptracker.common.Role;
import com.apptracker.common.Status;
import com.apptracker.entity.CandidateInfo;
import com.apptracker.entity.OnboardingStatus;
import com.apptracker.entity.UserInfo;
import com.apptracker.utils.ApptrackerUtils;
import com.google.common.collect.Lists;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.apptracker.common.CommonPoperties.CANDIDAE_INITIAL_SLA;
import static com.apptracker.common.Status.*;
import static java.util.stream.Collectors.toList;


/**
 * Created by Murthy on 8/18/2017.
 */
@Slf4j
@Service
public class NotificationServiceImpl implements NotificationService {
    @Autowired
    private UserService userService;
    @Autowired
    private CandidateService candidateService;
    @Autowired
    private OnboardingStatusService onboardingStatusService;

    @Override
    // @Transactional
    public Boolean sendEmail(String aid, Status status, Boolean remainder) {
        //Get roles to act on the status
        final List<Integer> roles = Arrays.asList(status
                .getRoles())
                .stream()
                .map(Role::getCode)
                .collect(Collectors.toList());

        // Get Candidate details
        OnboardingStatus onboardingStatus = onboardingStatusService.get(aid);
        CandidateInfo candidate = candidateService.get(aid);


       // TO Initiate BG or Demograph we need to get Candiate email id fo to address
        final String[] toAddrs = toArray(Optional.ofNullable(getEmailsByRoles(userService.getUsers(roles), candidate,
                status))
                .orElse(Lists.newArrayList()));
        final String[] copyAddr = toArray(Optional.ofNullable(getUserEmails(userService.getUsers(Lists
                .newArrayList(Role.SPOC.getCode()))))
                .orElse(Lists.newArrayList()));



        // Get subject, Body and attachements(if any)
        // Once SPOC reviews info -> notify to HR with attachement, No attachment needed if remainser to HR
        //
        final String[] attachments = Arrays.asList(status
                .getRoles())
                .stream()
                .filter(role -> role == Role.HR && !remainder)
                .findFirst()
                .map(found -> attachmentLoc(aid))
                .orElse(null);
        //TODO move to properties/constants
        String subTemplate = "Onboarding waiting foryour action."; //Populate from template
        //if remainder is true then add REMAINDER to the subject
        final String subject = Optional.of(remainder)
                .filter(val -> val)
                .map(yes -> "REMAINDER: " + subTemplate)
                .orElse(subTemplate);
        String bodyText = determineBodyText(status, remainder, candidate, onboardingStatus);
        System.out.println(String.format("toAddrs=%s, copyAddr=%s, subject=%s, bodyTemplate=%s, attachments=%s",
                toAddrs, copyAddr, subject,
                bodyText, attachments));
        //TODO:
        //Call notify
    /*    try {
            Notifier.sendEmail(toAddrs, copyAddr, subject, bodyTemplate, attachments);
        } catch (MessagingException e) {
            e.printStackTrace();
        }*/

    return true;
    }

    private static List<Status> candidateStatus = Lists.newArrayList(INITIATED_BG_AND_AWAITING_DEMOGRAPH,
            AWAITING_BG_AND_INITIATED_DEMOGRAPH,
            INITIATED_BG_AND_INITIATED_DEMOGRAPH);

    private List<String> getEmailsByRoles(List<UserInfo> users, CandidateInfo candidate, Status status) {


        return Optional.of(status)
                .filter(st -> candidateStatus.stream().anyMatch(p -> p==st))
                .map(st -> toListFromString(candidate.getEmail()))
                .orElse(getUserEmails(users));

    }

    private List<String> toListFromString(String email) {
        return Lists.newArrayList(email);
    }

    private List<String> getUserEmails(List<UserInfo> users) {

        return Optional.ofNullable(users)
                .map(this::toEmails)
                .orElseThrow(() -> new UnsupportedOperationException("No email ids associcated."));
    }

    private List<String> toEmails(List<UserInfo> users) {
        return users.stream().map(UserInfo::getEmail).collect(toList());
    }

    //TODO
    private String[] attachmentLoc(String id) {
        return null;
    }

    private String[] toArray(List<String> list) {
        return list.toArray(new String[list.size()]);
    }


    private String determineBodyText(Status status, Boolean remainder, CandidateInfo candidate, OnboardingStatus
            onboardingStatus) {

        String bodyText = "";
        switch (status) {
            case AWAITING_CANDIDATE_INFO:
                String tempurl = "https://apptracker.org/" + onboardingStatus.getUrlString();
                String dueDate = ApptrackerUtils.dateTotring(LocalDate.now().plusDays(CANDIDAE_INITIAL_SLA));

                bodyText = String.format("Email content to candidate \n FirstName: %s \n LastName: %s \n "
                                + "Temp url to access: %s \n"
                                + "The url will be expired by: %s", candidate.getFirstName(), candidate.getLastName(),
                        tempurl, dueDate);
                break;
            default:
                bodyText = String.format("The Onboarding task is waiting for your action. Please compleate ASAP \n" +
                        "Id: %s \n" +
                        "FirstName: %s \n" +
                        "LastName: %s", candidate.getAid(), candidate.getFirstName(), candidate
                        .getLastName());
                break;
        }
        return bodyText;
    }


}
