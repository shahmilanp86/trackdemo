package com.aptrack.entity;

import com.aptrack.common.FormerWorker;
import com.aptrack.common.YesORNo;
import com.aptrack.entity.converter.LocalDateConverter;
import lombok.Data;

import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by Murthy on 7/30/2017.
 */
@Data
@Entity
@Table(name = "users",schema = "apptracker")
public class UserInfo {

    @Id
    private Long id;
    private String fName;
    private String lName;
    private String email;
    private int role;

}
