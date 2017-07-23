package com.aptrack.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Murthy on 7/23/2017.
 */
@Data
@Entity
@Table(name = "candidate_info",schema = "apptracker")
public class OnboardingSummaryView extends CandidateData {
    @Id
    private Long aid;

    @OneToOne
    @JoinColumn(name="AID", nullable=true)
    private OnboardingStatus onboardingStatus;


    @OneToOne
    @JoinColumn(name="AID", nullable=true)
    private ContractInfo contractInfo;
}
