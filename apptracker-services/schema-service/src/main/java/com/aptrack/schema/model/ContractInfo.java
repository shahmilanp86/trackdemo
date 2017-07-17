package com.aptrack.schema.model;

import com.aptrack.schema.common.FormerWorker;
import com.aptrack.schema.common.YesORNo;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

/**
 * Created by Murthy on 7/16/2017.
 */
@Data
@Entity
public class ContractInfo {

    @Id
    private Long aid;
    private Long appprovedContactNum;
    private LocalDate contractEndDte;
    private LocalDate cwAssignmentEndDte;
    private Integer candidateRoleTyp; //TODO: ENUM
    private String returnStatus;
    private FormerWorker formaerWorker;
    private String priorSID;
    private String priorDates;
    private String supplierName;
    private String cwWorkCity;
    private Integer cwWorkLocation;
    private String cwWorkMailDrop;
    private String homeZip;
    private YesORNo usArmedForces;
    private YesORNo registeredNotaryPublic;
    private YesORNo csiInfoAccess;
    private YesORNo candidateReferredToYou;
    private String referralOriginate;
    private YesORNo candiateSeletedWithinGuidelines;
    private String currentAddress;
    private String serviceType;
    private String ITORNonIT;
    private String fullORPartTime;
    private String paymentType;
    private String costCenter;
    private String cwJobCode;
    private String lob;
    private LocalDate cwAssignmentStartDte;
    private String sponsorId;
    private String sponsorLastName;
    private String sponsorFirstName;
    private YesORNo emailRequired;
    private String spocEmail;








}
