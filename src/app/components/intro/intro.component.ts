import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: `
    <div class="intro">
      <h4>Introduction:</h4>
      <blockquote>
        <ul>
          <li>
            We present to you a project made in Angular with a peculiar architecture in which there are three
            sub-applications lazyloaded from a Core/Master App.
          </li>
          <li>
            This is merely a monorepo punished for teams of developers or simply developers who want to have a
            strictly organized project in layers and levels according the application size.
          </li>
          <li>
            These projects/applications may have different assets but all have the same dependencies and a single
            package.json file and node_modules folder.
          </li>
        </ul>

      </blockquote>
    </div>
  `,
  styles: [`
  .intro {
    padding: 5px;
    border: dotted 1px #161616;
    color: #572b2b;
  }

  h4 {
    padding: 0px;
    margin: 10px;
  }

  blockquote {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    width: auto;
    max-width: 600px;
    color: #1d1b1b;
  }

  blockquote ul {
    padding: 0px;
    margin: 10px;
  }

  blockquote li {
    margin: 0px;
    padding: 0px;
    padding-top: 5px;
  }
  `]
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
