import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  onBoardingDetails: OnBoardingDetail[];

  constructor() { 
    this.onBoardingDetails = [
      new OnBoardingDetail('e464649','Robert Will', 'Candidate to be informed', 'N/A', null, 'Today', 'N/A', null),
      new OnBoardingDetail('e464641','Tom Edward', 'Candidate info level 1 needed', 'N/A', null, 'Today', 'N/A', null),
      new OnBoardingDetail('t464649','Sumit Adule', 'Awaiting BG and Demographics', 'Awaiting Vendor', 'Complete', '2 days', '9918105401', null),
      new OnBoardingDetail('h464649','Lin Jin', 'Candidate to be informed', 'N/A', null, 'Today', '2809501253', null),
    ];
  }

  ngOnInit() {
  }

}

class OnBoardingDetail{

  constructor(
    public Aid: string,
    public Name: string,
    public Status: string,
    public BGCheck: string,
    public Demographics: string,
    public SLA: string,
    public Contact: string,
    public Notes: string
  ){
  }

}
