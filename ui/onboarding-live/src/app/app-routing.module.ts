import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidateComponent } from './pages/add-candidate/add-candidate.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CandidateDetailsComponent } from './pages/candidate-details/candidate-details.component';
import { IdrfComponent } from './pages/idrf/idrf.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ErrorComponent } from './common/error/error.component';
import { PersonalComponent } from './pages/idrf/personal/personal.component';
import { WorkComponent } from './pages/idrf/work/work.component';
import { AddressComponent } from './pages/idrf/address/address.component';
import { ResultComponent } from './pages/idrf/result/result.component';
import {IDRFFormFlow} from './services/idrf-flow-guard.service';

const appRoutes: Routes = [
  {
		path: 'add-candidate',
		component: AddCandidateComponent
	}, {
		path: 'dashboard',
		component: DashboardComponent,
    canActivate: [IDRFFormFlow]
	}, {
		path: 'candidate-details/:id',
		component: CandidateDetailsComponent
	}, {
		path: 'candidate-details',
		pathMatch: 'full',
		component: ErrorComponent,
		data: { msg: 'Missing Mandatory info to display Candidate Details' }

	}, {
    path: 'idrf/personal',
    component: PersonalComponent,
    data : {
      "name" : "personal"
    },
    canActivate: [IDRFFormFlow]
  }, {
    path: 'idrf/work',
    component: WorkComponent,
    data : {
      "name" : "work"
    },
    canActivate: [IDRFFormFlow]
  }, {
    path: 'idrf/address',
    component: AddressComponent,
    data : {
      "name" : "address"
    },
    canActivate: [IDRFFormFlow]
  }, {
    path: 'idrf/result',
    component: ResultComponent,
    data : {
      "name" : "result"
    },
    canActivate: [IDRFFormFlow]
  }, {
		path: 'settings',
		component: SettingsComponent
	}, {
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	}
	// { path: '**', component: PageNotFoundComponent }
];


@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		),
	],
	declarations: []
})
export class AppRoutingModule { }
