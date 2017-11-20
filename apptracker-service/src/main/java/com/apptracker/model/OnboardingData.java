package com.apptracker.model;

import com.apptracker.entity.CandidateInfo;
import com.apptracker.entity.ContractInfo;
import lombok.Builder;

/**
 * Created by Murthy on 7/19/2017.
 */
@Builder
public class OnboardingData {

    private CandidateInfo candidateInfo;
    private ContractInfo contractInfo;

}
