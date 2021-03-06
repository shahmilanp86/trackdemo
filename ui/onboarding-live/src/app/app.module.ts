import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import {HashLocationStrategy, Location, LocationStrategy, DatePipe} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AddCandidateComponent } from './pages/add-candidate/add-candidate.component';
import { MenuComponent } from './common/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CandidateDetailsComponent } from './pages/candidate-details/candidate-details.component';
import { IdrfComponent } from './pages/idrf/idrf.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ErrorComponent } from './common/error/error.component';
import { CandidateProgressComponent } from './pages/candidate-progress/candidate-progress.component';
import { AccordianComponent } from './common/accordian/accordian.component';
import { PageHeadingComponent } from './common/page-heading/page-heading.component';
import {HttpClientModule} from '@angular/common/http';
import {ConfigService } from './services/config.service';
import { PersonalComponent } from './pages/idrf/personal/personal.component';
import { WorkComponent } from './pages/idrf/work/work.component';
import { AddressComponent } from './pages/idrf/address/address.component';
import { ResultComponent } from './pages/idrf/result/result.component';
import { NavbarComponent } from './pages/idrf/navbar/navbar.component';
import { FormDataService } from './pages/idrf/data/formData.service';
import { WorkflowService } from './pages/idrf/workflow/workflow.service';
import {DatepickerComponent} from './common/datePicker/datepicker.component';
import { FormsModule } from '@angular/forms';
import {IDRFFormFlow} from './services/idrf-flow-guard.service';
import { DatepickerModule, PopoverModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import {CandidateIdrfComponent} from './pages/candidate-idrf/candidate-idrf.component';
import { ProgressbarModule, TabsModule } from 'ngx-bootstrap';
import {SharedService} from './services/sharedService';
import {ProgressBarComponent} from './pages/progress-bar/progressBar.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    AppComponent,
    AddCandidateComponent,
    DashboardComponent,
    CandidateDetailsComponent,
    IdrfComponent,
    SettingsComponent,
    ErrorComponent,
    CandidateProgressComponent,
    AccordianComponent,
    PageHeadingComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    ResultComponent,
    NavbarComponent,
    DatepickerComponent,
    CandidateIdrfComponent,
    ProgressBarComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DatepickerModule.forRoot(),
    PopoverModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot()
   ],
  providers: [ConfigService, Location, DatePipe,
    { provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: IDRFFormFlow, useClass: IDRFFormFlow }, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    //  console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
