import { Component, OnInit } from '@angular/core';
import { Work } from '../data/formData.model';
import {ActivatedRoute} from '@angular/router';
import { FormDataService } from '../data/formData.service';
import { ConfigService } from '../../../services/config.service';
import { HttpClient } from '@angular/common/http';
@Component ({
    selector:     'mt-wizard-work',
    templateUrl: './work.component.html'
})

export class WorkComponent implements OnInit {
    title = 'Contract Details';
    work: Work;
    form: any;
    candidateId: string;
    constructor(private formDataService: FormDataService, route: ActivatedRoute
                , private http: HttpClient, private configService: ConfigService) {
      this.candidateId = route.snapshot.params['id'];
    }

    ngOnInit() {
      this.work = this.formDataService.getWork();
      console.log(this.transform(this.work));
      if (this.transform(this.work).toString().length === 0) {
        this.http.get(this.configService.getAPIURL('getContracts') + '/' + this.candidateId).subscribe(serviceResp => {
          // Read the result field from the JSON response.
          this.populateWorkInfo(serviceResp);
          console.warn(serviceResp);
        });
      }
      console.log('Work feature loaded!===' + JSON.stringify(this.work));

    }

    populateWorkInfo(serviceResp) {
      const work: Work = {
        appprovedContactNum : serviceResp.contractInfo['appprovedContactNum'],
        contractEndDte : serviceResp.contractInfo['contractEndDte'],
        cwAssignmentEndDte : serviceResp.contractInfo['cwAssignmentEndDte'],
        /*candidateRoleTyp : serviceResp['candidateRoleTyp'],
        returnStatus : serviceResp['returnStatus'],
        formaerWorker : serviceResp['formaerWorker'],
        priorSid : serviceResp['priorSid'],
        priorDates : serviceResp['priorDates'],*/
        supplierName : serviceResp.contractInfo['supplierName'],
        cwWorkCity : serviceResp.contractInfo['cwWorkCity'],
        cwWorkLocation : serviceResp.contractInfo['cwWorkLocation'],
        cwWorkMailDrop : serviceResp.contractInfo['cwWorkMailDrop'],
        /*homeZip : serviceResp['homeZip'],
        usArmedForces : serviceResp['usArmedForces'],
        registeredNotaryPublic : serviceResp['registeredNotaryPublic'],*/
        csiInfoAccess : serviceResp.contractInfo['csiInfoAccess'],
        candidateReferredToYou : serviceResp.contractInfo['candidateReferredToYou'],
        referralOriginate : serviceResp.contractInfo['referralOriginate'],
        candiateSeletedWithinGuidelines : serviceResp.contractInfo['candiateSeletedWithinGuidelines'],
        /*currentAddress : serviceResp['currentAddress'],
        serviceType : serviceResp['serviceType'],
        fullORPartTime : serviceResp['fullORPartTime'],
        paymentType : serviceResp['paymentType'],*/
        costCenter : serviceResp.contractInfo['costCenter'],
        cwJobCode : serviceResp.contractInfo['cwJobCode'],
        lobName : serviceResp.contractInfo['lobName'],
        cwAssignmentStartDte : serviceResp.contractInfo['cwAssignmentStartDte']
       /* sponsorId : serviceResp['sponsorId'],
        sponsorLastName : serviceResp['sponsorLastName'],
        sponsorFirstName : serviceResp['sponsorFirstName'],
        emailRequired : serviceResp['emailRequired'],
        spocEmail : serviceResp['spocEmail'],*/
        /*itornonIT : serviceResp['itornonIT']*/
      };
      this.formDataService.setWork(work);
      this.work = this.formDataService.getWork();

    }

    save(form: any) {
        if (!form.valid){
          return;
        }
        this.formDataService.setWork(this.work);
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


}
