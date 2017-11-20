package com.apptracker.common;

import lombok.Getter;

/**
 * Created by Murthy on 7/28/2017.
 */
@Getter
public enum Role {
    CANDIDATE(100),
    SPOC(101),
    HR(102),
    MANAGER(103);

    private Integer code;

    Role(Integer code) {
        this.code = code;
    }


}
