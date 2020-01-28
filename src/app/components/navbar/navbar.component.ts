import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="nav">
    <ul>
      <li>
        <a routerLinkActive="active" routerLink="core">Core</a> &nbsp;
      </li>
      <li>
        <a routerLinkActive="active" routerLink="app1">App 1</a> &nbsp;
      </li>
      <li>
        <a routerLinkActive="active" routerLink="app2">App 2</a> &nbsp;
      </li>
      <li>
        <a routerLinkActive="active" routerLink="app3">App 3</a> &nbsp;
      </li>
    </ul>
  </div>
  `,
  styles: [`
  .nav {
    margin-bottom: -20px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 0px;
  }
  li {
    float: left;
  }
  li a {
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  li a:hover {
    background-color: #161616;
    color: white;
  }
  .active {
    background-color: #161616;
    color: white;
  }
`]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
