import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidate-progress',
  templateUrl: './candidate-progress.component.html',
  styleUrls: ['./candidate-progress.component.less']
})
export class CandidateProgressComponent implements OnInit {
  @Input() status: string;

  constructor() { }

  ngOnInit() {
  }

}
