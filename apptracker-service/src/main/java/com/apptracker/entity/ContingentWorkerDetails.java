package com.apptracker.entity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.Data;

/**
 * Created by Murthy on 9/16/2017.
 */

@Data
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY, isGetterVisibility = JsonAutoDetect.Visibility.NONE)

public class ContingentWorkerDetails {

    public ContingentWorkerDetails() {
    }

    public ContingentWorkerDetails(String aid, CandidateInfo personalInfo, ContractInfo contractInfo, Integer role) {
        this(aid, personalInfo, contractInfo);
        this.role = role;

    }

    public ContingentWorkerDetails(String aid, CandidateInfo personalInfo, ContractInfo contractInfo) {
        this.aid = aid;
        this.contractInfo = contractInfo;
        this.personalInfo = personalInfo;
    }

    private Integer role;
    private String aid;
    private CandidateInfo personalInfo;
    private ContractInfo contractInfo;


}
