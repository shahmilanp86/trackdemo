import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, ActivatedRoute
} from '@angular/router';
import { WorkflowService } from '../pages/idrf/workflow/workflow.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Personal, Work, Address } from '../pages/idrf/data/formData.model';
import { FormDataService } from '../pages/idrf/data/formData.service';

@Injectable()
export class IDRFFormFlow implements CanActivate {
  candidateId: string;
  personal: Personal;
  work: Work;
  address: Address;
  constructor(private router: Router, private workflowService: WorkflowService, private http: HttpClient, route: ActivatedRoute
  , private configService: ConfigService, private formDataService: FormDataService ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.candidateId = route.params['id'];
    console.log(this.candidateId);
    console.log('Entered' + route.data.name + 'state.');
  // If any of the previous steps is invalid, go back to the first invalid step
    const firstState = this.workflowService.getFirstInvalidStep(route.data.name);
    if (firstState.length > 0) {
      console.log('Redirected to ' + firstState + 'state which it is the first invalid step.');
      this.router.navigate(['/idrf/' + firstState + '/' + this.candidateId]);

    }

    return true;
  }
}
