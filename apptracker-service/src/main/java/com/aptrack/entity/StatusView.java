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

public class StatusView {
    public StatusView() {

    }

    public StatusView(String aid, Integer bgCheck, Integer demograph, Integer currentStatus, StatusFlag inputFlg) {
        this.aid = aid;
        this.bgCheck = bgCheck;
        this.demograph = demograph;
        this.currentStatus = currentStatus;
        this.inputFlg = inputFlg;
    }

    private String aid;
    private Integer bgCheck;
    private Integer demograph;
    private Integer currentStatus;
    private StatusFlag inputFlg;

}
