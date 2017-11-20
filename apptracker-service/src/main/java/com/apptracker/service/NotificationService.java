package com.apptracker.service;

import com.apptracker.common.Status;

/**
 * Created by Murthy on 8/18/2017.
 */
public interface NotificationService {

    Boolean sendEmail(String aid, Status status, Boolean remainder);

}
