import { Component, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component ({
    selector: 'msw-navbar'
    ,templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  candidateId: string;
  @Input() candidateNav: boolean;
  constructor( route: ActivatedRoute) {
    this.candidateId = route.snapshot.params['id'];
  }

}
