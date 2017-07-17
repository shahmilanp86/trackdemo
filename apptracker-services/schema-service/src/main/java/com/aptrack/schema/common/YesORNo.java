package com.aptrack.schema.common;

/**
 * Created by Murthy on 7/17/2017.
 */

import lombok.Getter;

@Getter
public enum YesORNo {
    YES("Yes"), NO("No");
    private String value;

    YesORNo(String value) {
        this.value = value;
    }
}
