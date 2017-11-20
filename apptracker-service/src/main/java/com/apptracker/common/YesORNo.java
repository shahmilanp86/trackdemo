package com.apptracker.common;

/**
 * Created by Murthy on 7/17/2017.
 */

import lombok.Getter;

@Getter
public enum YesORNo {
    YES(1), NO(0);
    private int value;

    YesORNo(int value) {
        this.value = value;
    }
}
