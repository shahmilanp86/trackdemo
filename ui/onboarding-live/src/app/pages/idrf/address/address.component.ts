import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Address } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { ConfigService } from '../../../services/config.service';
import { HttpClient } from '@angular/common/http';

@Component ({
    selector:     'mt-wizard-address',
    templateUrl: './address.component.html'
})

export class AddressComponent implements OnInit {
    title = 'Sponsor Details';
    address: Address;
    form: any;
    candidateId: string;

    constructor(private formDataService: FormDataService, route: ActivatedRoute
      , private http: HttpClient, private configService : ConfigService) {
      this.candidateId = route.snapshot.params['id'];
    }

    ngOnInit() {
        this.address = this.formDataService.getAddress();
      console.log(this.transform(this.address));
      if (this.transform(this.address).toString().length === 0) {
        this.http.get(this.configService.getAPIURL('getContracts') + '/' + this.candidateId).subscribe(serviceResp => {
          // Read the result field from the JSON response.
          this.populateAddressInfo(serviceResp);
          console.warn(serviceResp);
        });
      }
      console.log('Work feature loaded!===' + JSON.stringify(this.address));
    }

  populateAddressInfo(serviceResp) {
    const address: Address = {

      sponsorId : serviceResp['sponsorId'],
       sponsorLastName : serviceResp['sponsorLastName'],
       sponsorFirstName : serviceResp['sponsorFirstName'],
       emailRequired : serviceResp['emailRequired'],
       spocEmail : serviceResp['spocEmail']
    };
    this.formDataService.setAddress(address);
    this.address = this.formDataService.getAddress();

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

    save(form: any) {
        if (!form.valid)
            return;

        this.formDataService.setAddress(this.address);
    }
}
