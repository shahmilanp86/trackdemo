package com.aptrack.schema.common;

import lombok.Getter;

/**
 * Created by Murthy on 7/16/2017.
 */
@Getter
public enum FormerWorker {
    EMP(1), CW(2), BOTH(3), NA(4);
    private int value;
    FormerWorker(int val) {
        this.value = val;
    }
}
