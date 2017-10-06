import { Component, OnInit, NgModule } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './../../services/config.service';
import { CandidateIDRFInfo } from './../../models/CandidateIDRFInfo';
@Component({
  selector: 'app-candidate-idrf',
  templateUrl: './candidate-idrf.component.html',
  styleUrls: ['./candidate-idrf.component.css']
})
export class CandidateIdrfComponent implements OnInit {

   candidateId: string;
  CandidateIDRFInfo: CandidateIDRFInfo;
  constructor(private http: HttpClient, route: ActivatedRoute, private configService: ConfigService) {
    this.candidateId = route.snapshot.params['id'];
    this.CandidateIDRFInfo =  new CandidateIDRFInfo();
  }

  ngOnInit() {
      this.http.get(this.configService.getAPIURL('getContracts') + '/' + this.candidateId).subscribe(serviceResp => {
        this.populateBasicInfo(serviceResp);
      });
  }
  populateBasicInfo(serviceResp){
    this.CandidateIDRFInfo.firstName= serviceResp.personalInfo['firstName'];
    this.CandidateIDRFInfo.lastName= serviceResp.personalInfo['lastName'];
    this.CandidateIDRFInfo.emailID= serviceResp.personalInfo['email'];
    this.CandidateIDRFInfo.appprovedContactNum= serviceResp.contractInfo['appprovedContactNum'];
    this.CandidateIDRFInfo.contractEndDte= serviceResp.contractInfo['contractEndDte'];
    this.CandidateIDRFInfo.cwAssignmentEndDte= serviceResp.contractInfo['cwAssignmentEndDte'];
    this.CandidateIDRFInfo.candidateRoleTyp= serviceResp.contractInfo['candidateRoleTyp'];
    this.CandidateIDRFInfo.returnStatus= serviceResp.contractInfo['returnStatus'];
    this.CandidateIDRFInfo.formaerWorker= serviceResp.contractInfo['formaerWorker'];
    this.CandidateIDRFInfo.priorSid= serviceResp.contractInfo['priorSid'];
    this.CandidateIDRFInfo.priorDates= serviceResp.contractInfo['priorDates'];
    this.CandidateIDRFInfo.supplierName= serviceResp.contractInfo['supplierName'];
    this.CandidateIDRFInfo.cwWorkCity= serviceResp.contractInfo['cwWorkCity'];
    this.CandidateIDRFInfo.cwWorkLocation= serviceResp.contractInfo['cwWorkLocation'];
    this.CandidateIDRFInfo.cwWorkMailDrop= serviceResp.contractInfo['cwWorkMailDrop'];
    this.CandidateIDRFInfo.homeZip= serviceResp.personalInfo['homeZip'];
    this.CandidateIDRFInfo.usArmedForces= serviceResp.contractInfo['usArmedForces'];
    this.CandidateIDRFInfo.registeredNotaryPublic= serviceResp.contractInfo['registeredNotaryPublic'];
    this.CandidateIDRFInfo.csiInfoAccess= serviceResp.contractInfo['csiInfoAccess'];
    this.CandidateIDRFInfo.candidateReferredToYou= serviceResp.contractInfo['candidateReferredToYou'];
    this.CandidateIDRFInfo.referralOriginate= serviceResp.contractInfo['referralOriginate'];
    this.CandidateIDRFInfo.candiateSeletedWithinGuidelines= serviceResp.contractInfo['candiateSeletedWithinGuidelines'];
    this.CandidateIDRFInfo.currentAddress= serviceResp.personalInfo['currentAddress'];
    this.CandidateIDRFInfo.serviceType= serviceResp.contractInfo['serviceType'];
    this.CandidateIDRFInfo.fullORPartTime= serviceResp.contractInfo['fullORPartTime'];
    this.CandidateIDRFInfo.paymentType= serviceResp.contractInfo['paymentType'];
    this.CandidateIDRFInfo.costCenter= serviceResp.contractInfo['costCenter'];
    this.CandidateIDRFInfo.cwJobCode= serviceResp.contractInfo['cwJobCode'];
    this.CandidateIDRFInfo.lobName= serviceResp.contractInfo['lobName'];
    this.CandidateIDRFInfo.cwAssignmentStartDte= serviceResp.contractInfo['cwAssignmentStartDte'];
    this.CandidateIDRFInfo.sponsorId= serviceResp.contractInfo['sponsorId'];
    this.CandidateIDRFInfo.sponsorLastName= serviceResp.contractInfo['sponsorLastName'];
    this.CandidateIDRFInfo.sponsorFirstName= serviceResp.contractInfo['sponsorFirstName'];
    this.CandidateIDRFInfo.emailRequired= serviceResp.contractInfo['emailRequired'];
    this.CandidateIDRFInfo.spocEmail= serviceResp.contractInfo['spocEmail'];
    this.CandidateIDRFInfo.itornonIT= serviceResp.contractInfo['itornonIT'];
  }


}
