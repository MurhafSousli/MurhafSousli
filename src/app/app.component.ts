/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import {Header} from './partials/header';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  directives: [Header],
  styleUrls: [
    '../assets/style/style.scss'
  ],
  template: `
    <header></header>
     <main>
      <router-outlet></router-outlet>
     </main>
  `
})
export class App {


}
