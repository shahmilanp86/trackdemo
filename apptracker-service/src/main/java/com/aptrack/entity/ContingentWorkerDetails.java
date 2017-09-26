package com.aptrack.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

/**
 * Created by Murthy on 9/16/2017.
 */
//@Builder
@Data
@AllArgsConstructor(onConstructor=@__(@JsonCreator))
public class ContingentWorkerDetails {

    private Long aid;
    private CandidateInfo personalInfo;
    private ContractInfo contractInfo;


}
