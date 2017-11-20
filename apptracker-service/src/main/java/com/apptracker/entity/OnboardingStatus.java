package com.apptracker.entity;

import com.apptracker.entity.converter.LocalDateTimeConverter;
import lombok.Data;

import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

/**
 * Created by Murthy on 7/19/2017.
 */
@Data
@Entity
public class OnboardingStatus {
    @Id
    private String aid;
    private Integer bgCheck;
    @Convert(converter = LocalDateTimeConverter.class)
    private String bgCheckUpdTm;
    private Integer demograph;
    @Convert(converter = LocalDateTimeConverter.class)
    private String demographUpdTm;
    private String comments;
    @Convert(converter = LocalDateTimeConverter.class)
    private String lastUpdTm;
    private String lastUpdBy;
    private Integer currentStatus;
    @Convert(converter = LocalDateTimeConverter.class)
    private String currentStatusUpdTm;

    private String urlString;
    @Convert(converter = LocalDateTimeConverter.class)
    private String urlCreatedTm;
    @Transient
    private Integer currentSLA;


}
