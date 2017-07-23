package com.aptrack.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

/**
 * Created by Murthy on 7/15/2017.
 */


public class CandidateData {


    private String lastName;
    private String firstName;
    private String midInitial;
    private String prefFirstName;
    private String email;
    private String contactPhone;
    private Integer curStatus;


}
