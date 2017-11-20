package com.apptracker.common;

import lombok.Getter;

import java.util.Arrays;

/**
 * Created by Murthy on 8/18/2017.
 */
@Getter
public enum NotifyType {
    CANDIDATE_INIT(1), CANDICATE_INIT_REMAINDER(2), SPOC(3), SPOC_REMAINDER(4), HR(5), HR_REMAINDER(6);
    private Integer code;

    NotifyType(Integer code) {
        this.code = code;
    }

    public static NotifyType typeFrom(Integer code){
       return  Arrays.stream(NotifyType.values())
                .filter(type -> type.getCode()==code)
                .findFirst().orElse(null);
    }
}
