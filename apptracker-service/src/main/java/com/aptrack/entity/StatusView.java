package com.aptrack.entity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.Builder;
import lombok.Data;

/**
 * Created by Murthy on 10/10/2017.
 */
@Builder
@Data
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY, isGetterVisibility = JsonAutoDetect.Visibility.NONE)

public class StatusView {
    public StatusView() {

    }
    public StatusView(Long aid, Integer bgCheck,Integer demograph,Integer currentStatus) {
        this.aid =aid;
        this.bgCheck=bgCheck;
        this.demograph =demograph;
        this.currentStatus=currentStatus;
    }
    private Long aid;
    private Integer bgCheck;
    private Integer demograph;
    private Integer currentStatus;

}
