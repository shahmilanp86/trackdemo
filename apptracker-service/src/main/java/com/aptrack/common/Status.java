package com.aptrack.common;


import lombok.Getter;

/**
 * Created by Murthy on 7/28/2017.
 */

@Getter
public enum Status {

    AID_CREATED(101, Role.CANDIDATE),
    CANDIDATE_INFO_NEEDED(102, Role.SPOC, Role.CANDIDATE),
    SPOC_REVIEW(103, Role.SPOC),
    SPOC_TO_FILL_INFO(104, Role.SPOC),
    HR_REVIEW(105, Role.CANDIDATE),;

    private int code;
    private Role[] roles;


    Status(int code, Role... roles) {
        this.code = code;
        this.roles = roles;
    }
}
