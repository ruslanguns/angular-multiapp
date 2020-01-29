import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
    <h1>Core App</h1>
    <p>
      Local APP without any sub-application
    </p>
  `,
  styles: []
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
