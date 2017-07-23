package com.aptrack.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

/**
 * Created by Murthy on 7/19/2017.
 */
@Data
@Entity
//@Table(name = "onboarding_status",schema="apptracker")
public class OnboardingStatus {
   @Id
    private Long aid;
    private Integer bgCheck;
    private Timestamp bgCheckUpdTm;
    private Integer demograph;
    private Timestamp demographUpdTm;
    private String comments;
    private Timestamp lastUpdTm;
    private String lastUpdBy;
}
