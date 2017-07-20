package com.aptrack.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

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
    private Integer curStatus;

}
