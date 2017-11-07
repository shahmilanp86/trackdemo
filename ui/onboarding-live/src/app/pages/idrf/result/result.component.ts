import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormData } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ConfigService } from '../../../services/config.service';
import { DatePipe } from '@angular/common';
@Component ({
    selector:     'mt-wizard-result',
    templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'Verify Below Details';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    candidateId: string;
    idrfObject: object = {};
    personalInfo: object = {};
    contractInfo: object = {};
    constructor(private formDataService: FormDataService
    , private http: HttpClient, route: ActivatedRoute, private configService: ConfigService
    , public datepipe: DatePipe
    , private router: Router) {
    this.candidateId = route.snapshot.params['id'];
    }


  ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log(JSON.stringify(this.formData));
        this.populateFinalIDRFRequest();
        console.log('Result feature loaded!');
        console.log(JSON.stringify(this.idrfObject));

    }

    submit() {
      console.log('Final Request---'+JSON.stringify(this.idrfObject));
      this.http.put(this.configService.getAPIURL('addUpdateContracts'), this.idrfObject).subscribe(serviceResp => {
        this.router.navigate(['candidate-details/' + this.candidateId]);
      });
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
      this.contractInfo['contractEndDte'] = this.getFormattedDate(this.formData.contractEndDte);
      this.contractInfo['cwAssignmentEndDte'] = this.getFormattedDate(this.formData.cwAssignmentEndDte);
      this.contractInfo['candidateRoleTyp'] = this.formData.candidateRoleTyp;
      this.contractInfo['returnStatus'] = this.formData.returnStatus;
      this.contractInfo['formaerWorker'] = this.formData.formaerWorker;
      this.contractInfo['priorSid'] = this.formData.priorSid;
      this.contractInfo['priorDates'] = this.getFormattedDateRange(this.formData.priorDates);
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
      this.contractInfo['cwAssignmentStartDte'] = this.getFormattedDate(this.formData.cwAssignmentStartDte);
      this.contractInfo['sponsorId'] = this.formData.sponsorId;
      this.contractInfo['sponsorLastName'] = this.formData.sponsorLastName;
      this.contractInfo['sponsorFirstName'] = this.formData.sponsorFirstName;
      this.contractInfo['emailRequired'] = this.formData.emailRequired;
      this.contractInfo['spocEmail'] = this.formData.spocEmail;
      this.contractInfo['itornonIT'] = this.formData.itornonIT;
      this.idrfObject['personalInfo'] = this.personalInfo;
      this.idrfObject['contractInfo'] = this.contractInfo;

    }

  private getFormattedDate(date) {
    return this.datepipe.transform(date, 'MM/dd/yyyy');
  }

  private getFormattedDateRange(date) {
      const dateRange = date.toString().split(',');
      let finalDateRange = '';
    if (undefined !== dateRange[1]) {
      finalDateRange =  this.datepipe.transform(dateRange[0], 'MM/dd/yyyy');
      finalDateRange = finalDateRange + ' - ' + this.datepipe.transform(dateRange[1], 'MM/dd/yyyy');
      return finalDateRange;
    } else {
      return dateRange;
    }

  }


}
