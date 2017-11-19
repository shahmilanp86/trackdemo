package com.aptrack.entity;

import com.aptrack.common.FormerWorker;
import com.aptrack.entity.converter.LocalDateConverter;
import lombok.Data;

import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Id;

//import com.aptrack.common.String;

/**
 * Created by Murthy on 7/16/2017.
 */
@Data
@Entity

public class ContractInfo {

    @Id
    private String aid;
    private Long appprovedContactNum;

    @Convert(converter = LocalDateConverter.class)
    private String contractEndDte;

    @Convert(converter = LocalDateConverter.class)
    private String cwAssignmentEndDte;
    private String candidateRoleTyp;
    private String returnStatus;
    private FormerWorker formaerWorker;
    private String priorSid;
    private String priorDates;
    private String supplierName;
    private String cwWorkCity;
    private String cwWorkLocation;
    private String cwWorkMailDrop;
    private String usArmedForces;
    private String registeredNotaryPublic;
    private String csiInfoAccess;
    private String candidateReferredToYou;
    private String referralOriginate;
    private String candiateSeletedWithinGuidelines;
    private String serviceType;
    private String ITORNonIT;
    private String fullORPartTime;
    private String paymentType;
    private String costCenter;
    private String cwJobCode;
    private String lobName;

    @Convert(converter = LocalDateConverter.class)
    private String cwAssignmentStartDte;
    private String sponsorId;
    private String sponsorLastName;
    private String sponsorFirstName;
    private String emailRequired;
    private String spocEmail;

}
