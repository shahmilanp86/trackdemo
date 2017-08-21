package com.aptrack.service;

import com.aptrack.common.NotifyType;
import com.aptrack.common.Status;

/**
 * Created by Murthy on 8/18/2017.
 */
public interface NotificationService {

    void sendEmail(Long aid, Status status, Boolean remainder);

}
