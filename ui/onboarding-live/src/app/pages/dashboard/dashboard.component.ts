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
  statusList= [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 301, 302];
  statusMap: object =
    {
      '101': 'AID CREATED',
      '102': 'AWAITING CANDIDATE INFO',
      '103': 'SPOC REVIEW',
      '104': 'SPOC TO FILL INFO',
      '105': 'HR REVIEW',
      '106': 'HR TO GET PI',
      '107': 'HR TO NOTIFY CLIENT',
      '108': 'AWAITING SID',
      '109': 'AWAITING BG AND DEMOGRAPH',
      '110': 'AWAITING BG AND COMPLETED DEMOGRAPH',
      '111': 'COMPLETED BG AND AWAITING DEMOGRAPH',
      '112': 'SPOC TO CHECK VENDOR MGMT',
      '113': 'CCB FLAG',
      '114': 'START DATE',
      '301': 'CANDIDATE INITIATE BG',
      '302': 'CANDIDATE INITIATE DEMOGRAPH'
    };
  completedSteps: Array<string>;
  inCompleteSteps: Array<string>;
  progressPercent: number;
  progressColor: string;
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

  showProgress(statusCode) {
    this.completedSteps = [];
    this.inCompleteSteps = [];
    this.tabProcessing = true;
    for (const entry of this.statusList) {
      this.completedSteps.push(this.statusMap[entry]);
      if (entry === statusCode) {
        this.getIncompleteSteps(statusCode);
        break;
      }
    }
    this.progressPercent = Math.round((this.completedSteps.length) * 100 / Object.keys(this.statusMap).length);
    this.progressPercent > 50 ? this.progressColor = 'success' : this.progressColor = 'danger';
    this.isProcessing = true;
    this.tabProcessing = false;
  }

  getIncompleteSteps(statusCode) {
    const index = this.statusList.indexOf(statusCode);
    for (let i = index + 1; i < this.statusList.length; i++) {
      this.inCompleteSteps.push(this.statusMap[this.statusList[i]]);
    }
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
