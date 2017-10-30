package com.aptrack.entity;

import com.aptrack.common.StatusFlag;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.Builder;
import lombok.Data;

/**
 * Created by Murthy on 10/10/2017.
 */
@Builder
@Data
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY, isGetterVisibility = JsonAutoDetect.Visibility.NONE)

public class Notification {
    public Notification() {

    }
    public Notification(String aid, Integer currentStatus, Boolean remainder) {
        this.aid =aid;
        this.remainder=remainder;
        this.currentStatus =currentStatus;
        this.remainder = remainder;
    }
    private String aid;
    private Integer currentStatus;
    private Boolean remainder;


}
