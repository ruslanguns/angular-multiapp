import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view2',
  template: `
    <app-nav></app-nav>
    <p>
      App2 View2 Works!
    </p>
  `,
  styles: []
})
export class View2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
