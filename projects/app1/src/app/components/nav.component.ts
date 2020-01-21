import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <p>
      <a routerLink="/app1/view1">View 1</a>  —
      <a routerLink="/app1/view2">View 2</a>
    </p>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
