import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidate-progress',
  templateUrl: './candidate-progress.component.html',
  styleUrls: ['./candidate-progress.component.less']
})
export class CandidateProgressComponent implements OnInit {
  @Input() status: string;
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
  constructor() { }

  ngOnInit() {
  }

}
