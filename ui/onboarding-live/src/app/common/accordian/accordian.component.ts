import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.less']
})
export class AccordianComponent implements OnInit {
  @Input() tittle: string;
  @Input() isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

}
