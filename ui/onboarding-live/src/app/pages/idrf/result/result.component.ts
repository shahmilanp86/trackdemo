import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormData } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import {ActivatedRoute} from '@angular/router';
import { ConfigService } from '../../../services/config.service';
@Component ({
    selector:     'mt-wizard-result',
    templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'Thanks!';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    candidateId: string;
    idrfObject: object = {};
    constructor(private formDataService: FormDataService
    , private http: HttpClient, route: ActivatedRoute, private configService: ConfigService) {
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
      this.http.post(this.configService.getAPIURL('addUpdateContracts'), this.formData).subscribe(serviceResp => {
      });
      /*this.http
        .post('/api/contract', this.formData)
        .subscribe();*/
      /*let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });*/
      /*return this.http.post(this.configService.getAPIURL('getContracts') + '/' + this.candidateId, this.formData).toPromise()
        .then(this.extractData);*/

       /* this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;*/
    }
  /* private extractData(res: Response) {
      let body = res.json();
      return body.data || {};
    }*/
  /*private handleErrorObservable (error: Response | any) {
   console.error(error.message || error);
   return Observable.throw(error.message || error);
 }
 private handleErrorPromise (error: Response | any) {
   console.error(error.message || error);
   return Promise.reject(error.message || error);
 }*/

    private populateFinalIDRFRequest() {
      this.idrfObject['firstName'] = this.formData.firstName;
      this.idrfObject['lastName'] = this.formData.lastName;
      this.idrfObject['email'] = this.formData.emailID;
      this.idrfObject['appprovedContactNum'] = this.formData.appprovedContactNum;
      this.idrfObject['contractEndDte'] = this.formData.contractEndDte;
      this.idrfObject['cwAssignmentEndDte'] = this.formData.cwAssignmentEndDte;
      this.idrfObject['candidateRoleTyp'] = this.formData.candidateRoleTyp;
      this.idrfObject['returnStatus'] = this.formData.returnStatus;
      this.idrfObject['formaerWorker'] = this.formData.formaerWorker;
      this.idrfObject['priorSid'] = this.formData.priorSid;
      this.idrfObject['priorDates'] = this.formData.priorDates;
      this.idrfObject['supplierName'] = this.formData.supplierName;
      this.idrfObject['cwWorkCity'] = this.formData.cwWorkCity;
      this.idrfObject['cwWorkLocation'] = this.formData.cwWorkLocation;
      this.idrfObject['cwWorkMailDrop'] = this.formData.cwWorkMailDrop;
      this.idrfObject['homeZip'] = this.formData.homeZip;
      this.idrfObject['usArmedForces'] = this.formData.usArmedForces;
      this.idrfObject['registeredNotaryPublic'] = this.formData.registeredNotaryPublic;
      this.idrfObject['csiInfoAccess'] = this.formData.csiInfoAccess;
      this.idrfObject['candidateReferredToYou'] = this.formData.candidateReferredToYou;
      this.idrfObject['referralOriginate'] = this.formData.referralOriginate;
      this.idrfObject['candiateSeletedWithinGuidelines'] = this.formData.candiateSeletedWithinGuidelines;
      this.idrfObject['currentAddress'] = this.formData.currentAddress;
      this.idrfObject['serviceType'] = this.formData.serviceType;
      this.idrfObject['fullORPartTime'] = this.formData.fullORPartTime;
      this.idrfObject['paymentType'] = this.formData.paymentType;
      this.idrfObject['costCenter'] = this.formData.costCenter;
      this.idrfObject['cwJobCode'] = this.formData.cwJobCode;
      this.idrfObject['lobName'] = this.formData.lobName;
      this.idrfObject['cwAssignmentStartDte'] = this.formData.cwAssignmentStartDte;
      this.idrfObject['sponsorId'] = this.formData.sponsorId;
      this.idrfObject['sponsorLastName'] = this.formData.sponsorLastName;
      this.idrfObject['sponsorFirstName'] = this.formData.sponsorFirstName;
      this.idrfObject['emailRequired'] = this.formData.emailRequired;
      this.idrfObject['spocEmail'] = this.formData.spocEmail;
      this.idrfObject['itornonIT'] = this.formData.itornonIT;

    }
  /* private submitData(){
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     return this.http.post('/api/contract/', this.formData, options).toPromise()
       .then(this.extractData)
       .catch(this.handleErrorPromise);
   }
   private extractData(res: Response) {
     let body = res.json();
     return body.data || {};
   }
   private handleErrorObservable (error: Response | any) {
     console.error(error.message || error);
     return Observable.throw(error.message || error);
   }
   private handleErrorPromise (error: Response | any) {
     console.error(error.message || error);
     return Promise.reject(error.message || error);
   }*/
}
