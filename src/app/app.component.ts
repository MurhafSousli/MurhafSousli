/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import {Header} from './partials/header';
import {Loader} from'./partials/svg-loader/svg-loader.component';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  directives: [Header, Loader],
  styleUrls: [
    '../assets/style/style.scss'
  ],
  template: `
    <header></header>
     <main>
      <router-outlet></router-outlet>
     </main>
     <svg-loader *ngIf="appState.get('loading')" [src]="loaderSvg" [fallback]="loaderGif" class="animated zoomIn"></svg-loader>
  `
})
export class App {
  loaderSvg = require('../assets/img/pie.svg');
  loaderGif = '../assets/img/pie.gif';
  constructor(public appState: AppState){
    appState.set('loading', false);
  }

}
