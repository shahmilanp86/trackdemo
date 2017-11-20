package com.apptracker.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by Murthy on 7/30/2017.
 */
@Data
@Entity
@Table(name = "users", schema = "apptracker")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class UserInfo {

    @Id
    private Long id;
    private String fName;
    private String lName;
    private String email;
    private int role;

}
