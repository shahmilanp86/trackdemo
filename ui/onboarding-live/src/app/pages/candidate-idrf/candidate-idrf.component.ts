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
    this.CandidateIDRFInfo.firstName= serviceResp['firstName'];
    this.CandidateIDRFInfo.lastName= serviceResp['lastName'];
    this.CandidateIDRFInfo.emailID= serviceResp['emailID'];
    this.CandidateIDRFInfo.appprovedContactNum= serviceResp['appprovedContactNum'];
    this.CandidateIDRFInfo.contractEndDte= serviceResp['contractEndDte'];
    this.CandidateIDRFInfo.cwAssignmentEndDte= serviceResp['cwAssignmentEndDte'];
    this.CandidateIDRFInfo.candidateRoleTyp= serviceResp['candidateRoleTyp'];
    this.CandidateIDRFInfo.returnStatus= serviceResp['returnStatus'];
    this.CandidateIDRFInfo.formaerWorker= serviceResp['formaerWorker'];
    this.CandidateIDRFInfo.priorSid= serviceResp['priorSid'];
    this.CandidateIDRFInfo.priorDates= serviceResp['priorDates'];
    this.CandidateIDRFInfo.supplierName= serviceResp['supplierName'];
    this.CandidateIDRFInfo.cwWorkCity= serviceResp['cwWorkCity'];
    this.CandidateIDRFInfo.cwWorkLocation= serviceResp['cwWorkLocation'];
    this.CandidateIDRFInfo.cwWorkMailDrop= serviceResp['cwWorkMailDrop'];
    this.CandidateIDRFInfo.homeZip= serviceResp['homeZip'];
    this.CandidateIDRFInfo.usArmedForces= serviceResp['usArmedForces'];
    this.CandidateIDRFInfo.registeredNotaryPublic= serviceResp['registeredNotaryPublic'];
    this.CandidateIDRFInfo.csiInfoAccess= serviceResp['csiInfoAccess'];
    this.CandidateIDRFInfo.candidateReferredToYou= serviceResp['candidateReferredToYou'];
    this.CandidateIDRFInfo.referralOriginate= serviceResp['referralOriginate'];
    this.CandidateIDRFInfo.candiateSeletedWithinGuidelines= serviceResp['candiateSeletedWithinGuidelines'];
    this.CandidateIDRFInfo.currentAddress= serviceResp['currentAddress'];
    this.CandidateIDRFInfo.serviceType= serviceResp['serviceType'];
    this.CandidateIDRFInfo.fullORPartTime= serviceResp['fullORPartTime'];
    this.CandidateIDRFInfo.paymentType= serviceResp['paymentType'];
    this.CandidateIDRFInfo.costCenter= serviceResp['costCenter'];
    this.CandidateIDRFInfo.cwJobCode= serviceResp['cwJobCode'];
    this.CandidateIDRFInfo.lobName= serviceResp['lobName'];
    this.CandidateIDRFInfo.cwAssignmentStartDte= serviceResp['cwAssignmentStartDte'];
    this.CandidateIDRFInfo.sponsorId= serviceResp['sponsorId'];
    this.CandidateIDRFInfo.sponsorLastName= serviceResp['sponsorLastName'];
    this.CandidateIDRFInfo.sponsorFirstName= serviceResp['sponsorFirstName'];
    this.CandidateIDRFInfo.emailRequired= serviceResp['emailRequired'];
    this.CandidateIDRFInfo.spocEmail= serviceResp['spocEmail'];
    this.CandidateIDRFInfo.itornonIT= serviceResp['itornonIT'];
  }


}
