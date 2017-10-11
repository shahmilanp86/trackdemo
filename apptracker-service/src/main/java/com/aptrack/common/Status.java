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
    AID_CREATED(1,101,NO_SLA, Role.CANDIDATE),
    AWAITING_CANDIDATE_INFO(2,102, 2,Role.SPOC, Role.CANDIDATE),
    SPOC_REVIEW(3,103, 1, Role.SPOC),
    SPOC_TO_FILL_INFO(4,104, NO_SLA,Role.SPOC),
    HR_REVIEW(5,105,1, Role.HR),
    HR_TO_GET_PI(6,106,1, Role.HR),
    HR_TO_NOTIFY_CLIENT(7,107,1,Role.SPOC),
    AWAITING_SID(8,108,1,Role.SPOC),

    AWAITING_BG_AND_DEMOGRAPH(9,109,1,Role.SPOC),
    AWAITING_BG_AND_COMPLETED_DEMOGRAPH(10,110,1,Role.SPOC),
    COMPLETED_BG_AND_AWAITING_DEMOGRAPH(11,111,1,Role.SPOC),
    SPOC_TO_CHECK_VENDOR_MGMT(12,112,1,Role.SPOC),
    CCB_FLAG(13,113,1,Role.SPOC),
    START_DATE(14,114,1,Role.SPOC),

    CANDIDATE_INITIATE_BG(15,301,NO_SLA,Role.CANDIDATE),
    CANDIDATE_INITIATE_DEMOGRAPH(15,302,NO_SLA,Role.CANDIDATE);


    private Integer index;
    private int code;
    private Role[] roles;
    private int sla;

    public static Status valueFrom(int status){
        return Arrays.stream(Status.values())
                .filter(stat -> stat.getCode() == status)
                .findFirst()
                .get();
    }

    private static Status statusFromIndex(int index){
        return Arrays.stream(Status.values())
                .filter(stat -> stat.getIndex() == index)
                .findFirst()
                .get();
    }

    public  Status next(){
        return statusFromIndex(this.index+1);
    }

    Status(int index, int code,int sla, Role... nextActionRoles) {
        this.index = index;
        this.code = code;
        this.roles = nextActionRoles;
        this.sla = sla;
    }

/*    public static void main(String[] s){
        System.out.println(Status.COMPLETED_BG_AND_AWAITING_DEMOGRAPH.next());;
    }*/


}
