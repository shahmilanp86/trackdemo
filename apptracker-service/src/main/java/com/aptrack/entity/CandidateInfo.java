package com.aptrack.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

/**
 * Created by Murthy on 7/15/2017.
 */

@Data
@Entity
public class CandidateInfo {

    @Id
    private Long aid;
    private String lastName;
    private String firstName;
    private String midInitial;
    private String prefFirstName;
    private String email;
    private String contactPhone;

    //New
    private String currentAddress;
    private String homeZip;


/*    @OneToOne
    @JoinColumn(name="AID", nullable=true)
    private OnboardingStatus onboardingStatus;*/
}
