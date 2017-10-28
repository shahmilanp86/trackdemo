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
  statusList= [101, 102, 103, 104, 105, 106, 107, 108, 299, 300, 301, 302];
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


      '200': 'AWAITING BG AND DEMOGRAPH',
      '201': 'AWAITING BG AND INITIATED DEMOGRAPH',
      '202': 'AWAITING BG AND COMPLETED DEMOGRAPH',
      '210': 'INITIATED BG AND AWAITING DEMOGRAPH',
      '211': 'INITIATED BG AND INITIATED DEMOGRAPH',
      '220': 'COMPLETED BG AND AWAITING DEMOGRAPH',
      '221': 'COMPLETED BG AND INITIATED DEMOGRAPH',
      '212': 'INITIATED BG AND COMPLETED DEMOGRAPH',
      '222': 'COMPLETED BG AND COMPLETED DEMOGRAPH',
      '299': 'Bg and Demographics',


      '300': 'SPOC TO CHECK VENDOR MGMT',
      '301': 'CCB FLAG',
      '302': 'START DATE'
    };
  completedSteps: Array<string>;
  inCompleteSteps: Array<string>;
  progressPercent: number;
  progressColor: string;
  showPrevButton: boolean = false;
  showNxtButton: boolean = false;
  nextButtonText: string;
  prevButtonText: string;
  prevBgButtonValue: string ;
  nextBgButtonValue: string ;
  prevDgButtonValue: string ;
  nextDgButtonValue: string ;
  statusUpdateObj: object= {};
  candidateID: any;
  candidateStatus: number;
  disableButton: boolean = false;
  constructor(private http: HttpClient, route: ActivatedRoute, private configService: ConfigService) {

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

  activateRow(aid) {
    this.selectedRow = aid;
  }

  showProgress(aid, status) {
    this.completedSteps = [];
    this.inCompleteSteps = [];
    this.candidateStatus = status;
    this.candidateID = aid;
    this.isProcessing = true;
    this.prevBgButtonValue = '';
    this.nextBgButtonValue = '';
    this.prevDgButtonValue = '';
    this.nextDgButtonValue = '';
    this.disableButton = false;
    const regExpOne = /^1[0-9].*$/;
    const regExpTwo = /^2[0-9].*$/;
    const regExpThree = /^3[0-9].*$/;
    if (regExpOne.test(this.candidateStatus.toString()) ) {
      this.showPrevButton = false;
      this.showNxtButton = true;
      if (108 ===  this.candidateStatus) {
        this.nextButtonText = 'AWAITING BG AND DEMOGRAPH';
      }else {
        this.nextButtonText = this.statusMap[this.candidateStatus + 1];
      }
    }else if (regExpTwo.test(this.candidateStatus.toString())) {
      if (222 === this.candidateStatus) {
        this.showPrevButton = false;
        this.showNxtButton = true;
        this.nextButtonText = this.statusMap[300];
      }else {
      this.showPrevButton = true;
      this.showNxtButton = true;
      const digits = this.candidateStatus.toString().split('');
      if (digits[1] === '0') {
        this.prevButtonText = 'BG Awaiting';
        this.prevBgButtonValue = 'BG';
        this.prevDgButtonValue = '';
      }else if (digits[1] === '1') {
        this.prevButtonText = 'BG initiated by Spoc';
        this.prevBgButtonValue = 'BG';
        this.prevDgButtonValue = '';
      }else {
        this.showPrevButton = false;
      }
      if (digits[2] === '0') {
        this.nextButtonText = 'DG Awaiting';
        this.nextBgButtonValue = '';
        this.nextDgButtonValue = 'DG';
      }else if (digits[2] === '1') {
        this.nextButtonText = 'DG initiated by Spoc';
        this.nextBgButtonValue = '';
        this.nextDgButtonValue = 'DG';
      }else {
        this.showNxtButton = false;
      }
      }
    }else if (regExpThree.test(this.candidateStatus.toString())) {
      this.showPrevButton = false;
      this.showNxtButton = true;
      if (302 ===  this.candidateStatus) {
        this.nextButtonText = 'Completed';
        this.disableButton = true;
      }else {
        this.nextButtonText = this.statusMap[this.candidateStatus + 1];
      }
    }
    for (const entry of this.statusList){
      this.completedSteps.push(this.statusMap[entry]);
      if (entry === this.candidateStatus) {
        this.getIncompleteSteps(entry);
        break;
      }
      if (regExpTwo.test(entry.toString()) && this.candidateStatus < entry) {
          if (this.candidateStatus !== 222) {
            this.completedSteps.splice(-1, 1);
            this.getIncompleteSteps(299);
          }else {
            this.completedSteps.splice(-1,1);
            this.completedSteps.push(this.statusMap[299]);
            this.getIncompleteSteps(222);
          }
          break;
      }
    }
    this.progressPercent = Math.round((this.completedSteps.length) * 100 / this.statusList.length);
    this.progressPercent > 50 ? this.progressColor = 'success' : this.progressColor = 'danger';
  }

  getIncompleteSteps(statusCode) {
    const regExpTwo = /^2[0-9].*$/;
    if (regExpTwo.test(statusCode.toString()) && statusCode !== 222) {
      this.inCompleteSteps.push(this.statusMap[299]);
    }else if (statusCode === 222) {
      statusCode = 299;
    }
    const index = this.statusList.indexOf(statusCode);
    for (let i = index + 1; i < this.statusList.length; i++) {
      this.inCompleteSteps.push(this.statusMap[this.statusList[i]]);
    }

  }

  updateStatus(bgButtonValue, dgButtonValue) {
    this.statusUpdateObj['aid'] = this.candidateID;
    this.statusUpdateObj['bgCheck'] = bgButtonValue;
    this.statusUpdateObj['demograph'] = dgButtonValue;
    this.http.put(this.configService.getAPIURL('updateNextStatus'), this.statusUpdateObj).subscribe(serviceResp => {
      this.updateRecord();
    });
  }
  updateRecord () {
    this.http.get(this.configService.getAPIURL('candidateList')).subscribe(serviceResp => {

      this.populateBasicInfo(serviceResp);
      this.activateRow(this.candidateID);
      this.showProgress(this.candidateID, this.candidateStatus);
    });

  }

  getBgDgContent(statusCode, text) {
    const digits = statusCode.toString().split('');
    if (text === 'BG') {
      if (digits[1] === '0') {
        return text + ' Awaiting';
      }else if (digits[1] === '1') {
        return text + ' initiated by Spoc';
      }
    }else {
      if (digits[2] === '0') {
        return text + ' Awaiting';
      }else if (digits[2] === '1') {
        return text + ' initiated by Spoc';
      }
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
