import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component ({
    selector: 'msw-navbar'
    ,templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  candidateId: string;
  constructor( route: ActivatedRoute) {
    this.candidateId = route.snapshot.params['id'];
  }

}
