package com.apptracker.entity;

import com.apptracker.entity.converter.LocalDateConverter;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.Data;

import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by Murthy on 11/5/2017.
 */
@Data
@Entity
@Table(name = "login",schema = "apptracker")
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY, isGetterVisibility = JsonAutoDetect.Visibility.NONE)

public class Login {


    private Long id;
    @Id
    private String userName;
    private String password;

    @Convert(converter = LocalDateConverter.class)
    private String loginDte;
}
