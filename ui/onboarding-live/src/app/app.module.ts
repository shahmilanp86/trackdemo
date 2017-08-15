import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

import { AppRoutingModule }        from './app-routing.module';


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
import {ConfigService } from "./services/config.service";
 



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
    PageHeadingComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
  //  console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
