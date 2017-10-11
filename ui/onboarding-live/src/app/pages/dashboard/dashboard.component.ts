// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./../../services/config.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  onBoardingDetails: OnBoardingDetail[];
  selectedRow: string;
  isProcessing: boolean = false;
  tabProcessing: boolean = false;
  constructor(private http: HttpClient, route: ActivatedRoute, private configService: ConfigService) {
    // this.onBoardingDetails = [
    //   new OnBoardingDetail('e464649','Robert Will', 'Candidate to be informed', 'N/A', null, 'Today', 'N/A', null),
    //   new OnBoardingDetail('e464641','Tom Edward', 'Candidate info level 1 needed', 'N/A', null, 'Today', 'N/A', null),
    //   new OnBoardingDetail('t464649','Sumit Adule', 'Awaiting BG and Demographics', 'Awaiting Vendor', 'Complete', '2 days', '9918105401', null),
    //   new OnBoardingDetail('h464649','Lin Jin', 'Candidate to be informed', 'N/A', null, 'Today', '2809501253', null),
    // ];
  }

  ngOnInit() {
    this.http.get(this.configService.getAPIURL('candidateList')).subscribe(serviceResp => {
        this.populateBasicInfo(serviceResp);
        // console.warn(serviceResp)
    });
  }

  populateBasicInfo(serviceResp) {
    this.onBoardingDetails = [];
    for (var i = 0; i < serviceResp.length; i++) {
      this.onBoardingDetails[i] = new OnBoardingDetail();
      this.onBoardingDetails[i].aid = serviceResp[i].aid;
      this.onBoardingDetails[i].fName = serviceResp[i].firstName;
      this.onBoardingDetails[i].mName = serviceResp[i].midInitial;
      this.onBoardingDetails[i].lName = serviceResp[i].lastName;
      this.onBoardingDetails[i].fullName = serviceResp[i].firstName + " " + (serviceResp[i].midInitial || "") + " " + (serviceResp[i].lastName ||  "");
      this.onBoardingDetails[i].email = serviceResp[i].email;
      this.onBoardingDetails[i].contactPhone = serviceResp[i].contactPhone;
      this.onBoardingDetails[i].contact = serviceResp[i].Contact;
        // prefFirstName
      if (serviceResp[i].onboardingStatus) {
        this.onBoardingDetails[i].aid = serviceResp[i].onboardingStatus.aid;
        this.onBoardingDetails[i].status = serviceResp[i].onboardingStatus.currentStatus;
        this.onBoardingDetails[i].bg = serviceResp[i].onboardingStatus.bgCheck;
        this.onBoardingDetails[i].demograph = serviceResp[i].onboardingStatus.demograph;
        this.onBoardingDetails[i].sla = serviceResp[i].onboardingStatus.currentSLA;
        this.onBoardingDetails[i].comments = serviceResp[i].onboardingStatus.comments;

      }
    }
  }

  activateRow(onBoardingDetail) {
    this.selectedRow = onBoardingDetail.aid;
  }
  showProgress() {
    this.tabProcessing = true;
    this.isProcessing = true;
    this.tabProcessing = false;
  }


}

class OnBoardingDetail {

  public aid: string;
  public fName: string;
  public mName: string;
  public lName: string;
  public fullName: string;
  public email: string;
  public contactPhone: string;

  public status: string;
  public bg: string;
  public demograph: string;
  public sla: string;
  public contact: string;
  public comments: string


}
