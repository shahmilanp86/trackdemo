import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { ConfigService } from '../../../services/config.service';
import { SharedService } from '../../../services/sharedService';
import { HttpClient } from '@angular/common/http';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';
import { FormData } from '../data/formData.model';

@Component ({
    selector:     'mt-wizard-personal',
    templateUrl: './personal.component.html'
})

export class PersonalComponent implements OnInit, PipeTransform {
    title = 'Candidate Details';
    personal: Personal;
    form: any;
    candidateId: string;
    isCandidate: boolean;
    @Input() formData: FormData;
    idrfObject: object = {};
    personalInfo: object = {};
    contractInfo: object = {};

    constructor(private formDataService: FormDataService
                , private http: HttpClient, route: ActivatedRoute, private configService: ConfigService
                , private workflowService: WorkflowService
                , private router: Router
                , private _sharedService: SharedService) {
      this.candidateId = route.snapshot.params['id'];
    }

    ngOnInit() {
       this.personal = this.formDataService.getPersonal();
       console.log(this.transform(this.personal));
       if (this.transform(this.personal).toString().length === 0) {
         this.http.get(this.configService.getAPIURL('getContracts') + '/' + this.candidateId).subscribe(serviceResp => {
           // Read the result field from the JSON response.
           this.populatePersonalInfo(serviceResp);
           this._sharedService.setRole(serviceResp['role']);
           console.warn(serviceResp);
         });
       }
      console.log('Personal feature loaded!===' + JSON.stringify(this.personal));
    }

    populatePersonalInfo(serviceResp) {
      if (serviceResp.role === 'candidate') {
        this.isCandidate = true;
      }else {
        this.isCandidate = false;
      }
      const personal: Personal = {
        firstName: serviceResp.personalInfo['firstName'],
        lastName: serviceResp.personalInfo['lastName'],
        middleName: serviceResp.personalInfo['midInitial'],
        prefFirstName: serviceResp.personalInfo['prefFirstName'],
        phoneNum: serviceResp.personalInfo['contactPhone'],
        emailID: serviceResp.personalInfo['email'],
        candidateRoleTyp : serviceResp.contractInfo['candidateRoleTyp'],
        returnStatus : serviceResp.contractInfo['returnStatus'],
        formaerWorker : serviceResp.contractInfo['formaerWorker'],
        priorSid : serviceResp.contractInfo['priorSid'],
        priorDates : serviceResp.contractInfo['priorDates'],
        homeZip : serviceResp.personalInfo['homeZip'],
        usArmedForces : serviceResp.contractInfo['usArmedForces'],
        registeredNotaryPublic : serviceResp.contractInfo['registeredNotaryPublic'],
        currentAddress : serviceResp.personalInfo['currentAddress'],
        serviceType : serviceResp.contractInfo['serviceType'],
        fullORPartTime : serviceResp.contractInfo['fullORPartTime'],
        paymentType : serviceResp.contractInfo['paymentType'],
        itornonIT : serviceResp.contractInfo['itornonIT']
      };
      this.formDataService.setPersonal(personal);
      this.personal = this.formDataService.getPersonal();

    }

    save(form: any) {
        if (!form.valid) {
          return;
        }
        this.formDataService.setPersonal(this.personal);
        this.workflowService.validateStep(STEPS.personal);
    }

  saveCandidate(form: any){
    this.formDataService.setPersonal(this.personal);
    this.formData = this.formDataService.getFormData();
    this.populateFinalIDRFRequest();
    this.http.put(this.configService.getAPIURL('addUpdateContracts'), this.idrfObject).subscribe(serviceResp => {
      window.location.href = 'thankyou.html';
    });
  }

  transform(value: any, args?: any[]): any[] {
    // create instance vars to store keys and final output
    const keyArr: any[] = Object.keys(value),
      dataArr = [];

    // loop through the object,
    // pushing values to the return array
    keyArr.forEach((key: any) => {
      if (value[key] !== '') {
        dataArr.push(value[key]);
      }
    });

    // return the resulting array
    return dataArr;
  }
  _keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  private populateFinalIDRFRequest() {
    this.idrfObject['aid'] = this.candidateId;
    this.personalInfo['aid'] = this.candidateId;
    this.personalInfo['firstName'] = this.formData.firstName;
    this.personalInfo['lastName'] = this.formData.lastName;
    this.personalInfo['midInitial'] = this.formData.middleName;
    this.personalInfo['prefFirstName'] = this.formData.prefFirstName;
    this.personalInfo['email'] = this.formData.emailID;
    this.personalInfo['contactPhone'] = this.formData.phoneNum;
    this.personalInfo['currentAddress'] = this.formData.currentAddress;
    this.personalInfo['homeZip'] = this.formData.homeZip;
    this.contractInfo['aid'] = this.candidateId;
    this.contractInfo['appprovedContactNum'] = this.formData.appprovedContactNum;
    this.contractInfo['contractEndDte'] = '';
    this.contractInfo['cwAssignmentEndDte'] = '';
    this.contractInfo['candidateRoleTyp'] = this.formData.candidateRoleTyp;
    this.contractInfo['returnStatus'] = this.formData.returnStatus;
    this.contractInfo['formaerWorker'] = this.formData.formaerWorker;
    this.contractInfo['priorSid'] = this.formData.priorSid;
    this.contractInfo['priorDates'] = '';
    this.contractInfo['supplierName'] = this.formData.supplierName;
    this.contractInfo['cwWorkCity'] = this.formData.cwWorkCity;
    this.contractInfo['cwWorkLocation'] = this.formData.cwWorkLocation;
    this.contractInfo['cwWorkMailDrop'] = this.formData.cwWorkMailDrop;
    this.contractInfo['usArmedForces'] = this.formData.usArmedForces;
    this.contractInfo['registeredNotaryPublic'] = this.formData.registeredNotaryPublic;
    this.contractInfo['csiInfoAccess'] = this.formData.csiInfoAccess;
    this.contractInfo['candidateReferredToYou'] = this.formData.candidateReferredToYou;
    this.contractInfo['referralOriginate'] = this.formData.referralOriginate;
    this.contractInfo['candiateSeletedWithinGuidelines'] = this.formData.candiateSeletedWithinGuidelines;
    this.contractInfo['serviceType'] = this.formData.serviceType;
    this.contractInfo['fullORPartTime'] = this.formData.fullORPartTime;
    this.contractInfo['paymentType'] = this.formData.paymentType;
    this.contractInfo['costCenter'] = this.formData.costCenter;
    this.contractInfo['cwJobCode'] = this.formData.cwJobCode;
    this.contractInfo['lobName'] = this.formData.lobName;
    this.contractInfo['cwAssignmentStartDte'] = '';
    this.contractInfo['sponsorId'] = this.formData.sponsorId;
    this.contractInfo['sponsorLastName'] = this.formData.sponsorLastName;
    this.contractInfo['sponsorFirstName'] = this.formData.sponsorFirstName;
    this.contractInfo['emailRequired'] = this.formData.emailRequired;
    this.contractInfo['spocEmail'] = this.formData.spocEmail;
    this.contractInfo['itornonIT'] = this.formData.itornonIT;
    this.idrfObject['personalInfo'] = this.personalInfo;
    this.idrfObject['contractInfo'] = this.contractInfo;

  }
}
