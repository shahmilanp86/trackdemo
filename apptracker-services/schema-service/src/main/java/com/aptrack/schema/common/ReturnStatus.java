package com.aptrack.schema.common;

import lombok.Getter;

/**
 * Created by Murthy on 7/16/2017.
 */
@Getter
public enum ReturnStatus {
    NEW("New"),RETURNING("Returning");

    private String value;

    ReturnStatus(String value) {
        this.value = value;
    }
}
