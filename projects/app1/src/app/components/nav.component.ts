import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <p>
      <a routerLinkActive="active" routerLink="/app1/view1">View 1</a>  —
      <a routerLinkActive="active" routerLink="/app1/view2">View 2</a>
    </p>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
