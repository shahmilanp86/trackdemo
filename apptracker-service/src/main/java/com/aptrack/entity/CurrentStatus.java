package com.aptrack.entity;

import lombok.Getter;

import javax.persistence.Entity;
import java.sql.Timestamp;

/**
 * Created by Murthy on 7/19/2017.
 */
@Entity
@Getter
public class CurrentStatus {

    private Long aid;
    private Boolean bgCheck;
    private Timestamp bgCheckDte;
    private Boolean demograph;
    private Timestamp demographDte;
    private String comments;
    private Timestamp lastUpdated;
    private String lastUpdatedBy;

}
