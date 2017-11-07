import {Component, OnInit, AfterViewChecked, OnDestroy, AfterViewInit} from '@angular/core';
import { SharedService } from '../../services/sharedService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit, AfterViewChecked{
  appName = 'Onboarding Live'
   displayChildMenuFlg = false;
    isCandidate: boolean;// store state
    toggleState() { // click handler
        this.displayChildMenuFlg =  !this.displayChildMenuFlg;
    }
    collapseMenu()  {
      this.displayChildMenuFlg = false;
    }
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {

  }
  ngAfterViewChecked(){
    if(this._sharedService.getRole() === 100) {
      this.isCandidate = true;
    }else {
      this.isCandidate = false;
    }
  }

}
