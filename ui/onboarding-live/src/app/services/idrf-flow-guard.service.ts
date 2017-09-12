import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { WorkflowService } from '../pages/idrf/workflow/workflow.service';

@Injectable()
export class IDRFFormFlow implements CanActivate {
  constructor(private router: Router, private workflowService: WorkflowService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Entered' + route.data.name + 'state.');
  // If any of the previous steps is invalid, go back to the first invalid step
    const firstState = this.workflowService.getFirstInvalidStep(route.data.name);
    if (firstState.length > 0) {
      console.log('Redirected to ' + firstState + 'state which it is the first invalid step.');
      // this.router.navigate(['/idrf/' + firstState]);

    }
    return true;
  }
}
