package com.aptrack.common;


import lombok.Getter;

import java.util.Arrays;
import  static com.aptrack.common.CommonPoperties.NO_SLA;
/**
 * Created by Murthy on 7/28/2017.
 */

@Getter
public enum Status {
    /**
     * Status Code
     * SLA for the the Status
     * Roles resposble to Act for the Status
     */
    AID_CREATED(101,NO_SLA, Role.CANDIDATE),
    AWAITING_CANDIDATE_INFO(102, 2,Role.SPOC, Role.CANDIDATE),
    SPOC_REVIEW(103, 1, Role.SPOC),
    SPOC_TO_FILL_INFO(104, NO_SLA,Role.SPOC),
    HR_REVIEW(105,1, Role.HR),
    HR_TO_GET_PI(106,1, Role.HR),
    HR_TO_NOTIFY_CLIENT(107,1,Role.SPOC),
    AWAITING_SID(108,1,Role.SPOC),
    AWAITING_BG_AND_DEMOGRAPH(109,1,Role.SPOC),
    AWAITING_BG_AND_COMPLETED_DEMOGRAPH(110,1,Role.SPOC),
    COMPLETED_BG_AND_AWAITING_DEMOGRAPH(111,1,Role.SPOC),
    SPOC_TO_CHECK_VENDOR_MGMT(112,1,Role.SPOC),
    CCB_FLAG(113,1,Role.SPOC),
    START_DATE(114,1,Role.SPOC),


    CANDIDATE_INITIATE_BG(301,NO_SLA,Role.CANDIDATE),
    CANDIDATE_INITIATE_DEMOGRAPH(302,NO_SLA,Role.CANDIDATE);

    private int code;
    private Role[] roles;
    private int sla;

    public static Status valueFrom(int status){
        return Arrays.stream(Status.values())
                .filter(stat -> stat.getCode() == status)
                .findFirst()
                .get();
    }

    Status(int code,int sla, Role... nextActionRoles) {
        this.code = code;
        this.roles = nextActionRoles;
        this.sla = sla;
    }
}
