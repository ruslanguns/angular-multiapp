import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view1',
  template: `
    <app-nav></app-nav>
    <p>
      App3 view1 works!
    </p>
  `,
  styles: []
})
export class View1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
