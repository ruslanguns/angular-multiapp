import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <ul>
      <li>
        <a routerLinkActive="active" routerLink="/app2/view1">View 1</a>&nbsp;
      </li>
      <li>
        <a routerLinkActive="active" routerLink="/app2/view2">View 2</a> &nbsp;
      </li>
    </ul>
  `,
  styles: [`
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
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
