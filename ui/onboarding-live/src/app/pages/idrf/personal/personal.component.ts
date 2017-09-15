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
    title = 'Please tell us about yourself.';
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
        firstName: serviceResp['firstName'],
        lastName: serviceResp['lastName'],
        email: serviceResp['email']
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
}
