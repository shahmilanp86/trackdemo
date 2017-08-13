import { Component, OnInit, NgModule } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";
import { CandidateBasicInfo } from "./../../models/candidateBasicInfo";
import { ConfigService } from "./../../services/config.service";
@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

   candidateId: string;
   candidateBasicInfo: CandidateBasicInfo;
   currentStaus: string;
  
  constructor(private http: HttpClient ,route: ActivatedRoute,private configService : ConfigService ) {
    this.candidateBasicInfo =  new CandidateBasicInfo();
    this.candidateId = route.snapshot.params['id']; 
  }
  ngOnInit() {
       // Make the HTTP request: 
      //  NOTE: add service URL in api-urls.ts
      this.http.get(this.configService.getAPIURL('getCandidateDetails') + '/' +this.candidateId).subscribe(serviceResp => {
      // Read the result field from the JSON response.
      this.populateBasicInfo(serviceResp);
      console.warn(serviceResp)
    });
  
  }
  populateBasicInfo(serviceResp){

    this.candidateBasicInfo.aid = serviceResp.aid;
    this.candidateBasicInfo.firstName = serviceResp.firstName;
    this.candidateBasicInfo.lastName = serviceResp.lastName;
    this.candidateBasicInfo.middleName = serviceResp.midInitial;
    this.candidateBasicInfo.email = serviceResp.email;
    this.candidateBasicInfo.contactNumber = serviceResp.contactPhone;
    this.currentStaus = serviceResp.curStatus;
  }
 

}
