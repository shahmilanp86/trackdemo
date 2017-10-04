package com.aptrack.entity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.*;

/**
 * Created by Murthy on 9/16/2017.
 */
//@Builder
//@Data
//@Getter
//@Setter
@Data
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY, isGetterVisibility = JsonAutoDetect.Visibility.NONE)

//@AllArgsConstructor(onConstructor=@__(@JsonCreator))
public class ContingentWorkerDetails {

    public ContingentWorkerDetails(){
    }

    public ContingentWorkerDetails(Long aid,CandidateInfo personalInfo, ContractInfo contractInfo ){
        this.aid = aid;
        this.contractInfo = contractInfo;
        this.personalInfo = personalInfo;
    }

    private Long aid;
    private CandidateInfo personalInfo;
    private ContractInfo contractInfo;


}
