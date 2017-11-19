package com.aptrack.controller;

import com.aptrack.common.Status;
import com.aptrack.entity.Notification;
import com.aptrack.entity.OnboardingStatus;
import com.aptrack.entity.StatusView;
import com.aptrack.service.NotificationService;
import com.aptrack.service.OnboardingStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Murthy on 7/23/2017.
 */
@RestController
public class OnboardingStatusController {

    @Autowired
    private OnboardingStatusService statusService;

    @Autowired
    private NotificationService notificationService;


    @RequestMapping(
            value = "/api/onboard/status",
            method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<OnboardingStatus> update(
            @RequestBody OnboardingStatus status) {
        return new ResponseEntity<OnboardingStatus>(statusService.update(status), HttpStatus.CREATED);
    }

    @RequestMapping(
            value = "/api/onboard/status/{id}",
            method = RequestMethod.GET,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<OnboardingStatus> get(
            @PathVariable("id") String id) {
        return new ResponseEntity<OnboardingStatus>(statusService.get(id), HttpStatus.OK);
    }

    @RequestMapping(
            value = "/api/onboard/nextstatus",
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<StatusView> nextStatus( @RequestBody StatusView uiStatus) {

        return new ResponseEntity<StatusView>(statusService.nextStatus(uiStatus), HttpStatus.OK);
    }

    @RequestMapping(
            value = "/api/onboard/notify",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> notify(
            @RequestBody Notification notifier) {
        return new ResponseEntity<Boolean>(notificationService.sendEmail(notifier.getAid(), Status.valueFrom(
                notifier.getCurrentStatus())
                , notifier.getRemainder()),
        HttpStatus
                .CREATED);
    }


}
