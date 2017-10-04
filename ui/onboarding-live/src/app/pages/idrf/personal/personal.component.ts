import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { ConfigService } from '../../../services/config.service';
import { HttpClient } from '@angular/common/http';


@Component ({
    selector:     'mt-wizard-personal',
    templateUrl: './personal.component.html'
})

export class PersonalComponent implements OnInit, PipeTransform {
    title = 'Candidate Details';
    personal: Personal;
    form: any;
    candidateId: string;

    constructor(private formDataService: FormDataService
                , private http: HttpClient, route: ActivatedRoute, private configService: ConfigService) {
      this.candidateId = route.snapshot.params['id'];
    }

    ngOnInit() {
       this.personal = this.formDataService.getPersonal();
       console.log(this.transform(this.personal));
       if (this.transform(this.personal).toString().length === 0) {
         this.http.get(this.configService.getAPIURL('getContracts') + '/' + this.candidateId).subscribe(serviceResp => {
           // Read the result field from the JSON response.
           this.populatePersonalInfo(serviceResp);
           console.warn(serviceResp);
         });
       }
      console.log('Personal feature loaded!===' + JSON.stringify(this.personal));
    }

    populatePersonalInfo(serviceResp) {
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
