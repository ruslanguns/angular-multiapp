import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
    <p>
      This is the local core APP without any sub-application
    </p>
  `,
  styles: []
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
