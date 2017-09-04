import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { CandidateBasicInfo } from "./../../models/candidateBasicInfo";
import { ConfigService } from "./../../services/config.service";

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})

export class AddCandidateComponent implements OnInit {

   candidateBasicInfo: CandidateBasicInfo;
 
  constructor(private http: HttpClient ,route: ActivatedRoute,private configService : ConfigService ) {
    this.candidateBasicInfo =  new CandidateBasicInfo();
  }

  ngOnInit() {
   // Make the HTTP request: 
      //  NOTE: add service URL in api-urls.ts
      //this.http.get(this.configService.getAPIURL('addCandidateDetails') + '/' +this.candidateBasicInfo).subscribe(serviceResp => {
      // Read the result field from the JSON response.
      //this.onSaveEmail(serviceResp);
      //console.warn(serviceResp)
    //});
  }

  onSaveEmail(){
  //todo;
    //serviceResp.aid = this.candidateBasicInfo.aid;
    //serviceResp.firstName = this.candidateBasicInfo.firstName;
    //serviceResp.midInitial = this.candidateBasicInfo.middleName;
    //serviceResp.lastName = this.candidateBasicInfo.lastName;
    //serviceResp.email = this.candidateBasicInfo.email;
    //serviceResp.contactPhone = this.candidateBasicInfo.contactNumber;
  }
  
  onCancel(){
  //todo;
  this.candidateBasicInfo.aid="";
  this.candidateBasicInfo.firstName="";
  this.candidateBasicInfo.middleName="";
  this.candidateBasicInfo.lastName="";
  this.candidateBasicInfo.email="";
  this.candidateBasicInfo.contactNumber="";
  }

}
