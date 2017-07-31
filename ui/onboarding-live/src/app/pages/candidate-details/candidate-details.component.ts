import { Component, OnInit, NgModule } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";
import { CandidateBasicInfo } from "./../../models/candidateBasicInfo";
@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

   candidateId: string;
   candidateBasicInfo: CandidateBasicInfo;
   currentStaus: string;
 
  constructor(private http: HttpClient ,route: ActivatedRoute) {
    this.candidateBasicInfo =  new CandidateBasicInfo();
    
    this.candidateId = route.snapshot.params['id']; 
  }
  ngOnInit() {
       // Make the HTTP request:
      this.http.get('/data/candidateDetails.json?/'+this.candidateId).subscribe(serviceResp => {
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
