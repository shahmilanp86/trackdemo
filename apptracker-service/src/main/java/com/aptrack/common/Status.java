package com.aptrack.common;


import lombok.Getter;

import java.util.Arrays;
import  static com.aptrack.common.CommonPoperties.NO_SLA;
/**
 * Created by Murthy on 7/28/2017.
 */

@Getter
public enum Status {

    AID_CREATED(101,NO_SLA, Role.CANDIDATE),
    CANDIDATE_INFO_NEEDED(102, 2,Role.SPOC, Role.CANDIDATE),
    SPOC_REVIEW(103, 1, Role.SPOC),
    SPOC_TO_FILL_INFO(104, NO_SLA,Role.SPOC),
    HR_REVIEW(105,1, Role.CANDIDATE),;



    private int code;
    private Role[] roles;
    private int sla;

    public static Status valueFrom(int status){
        return Arrays.stream(Status.values())
                .filter(stat -> stat.getCode() == status)
                .findFirst()
                .get();
    }

    Status(int code,int sla, Role... roles) {
        this.code = code;
        this.roles = roles;
        this.sla = sla;
    }
}
