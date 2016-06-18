import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {AppState} from './app.service';
import {Home} from './home';
import {Blog} from './blog';
import {Header} from './partials/header';
import {SideHeader} from './partials/side-header';


@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.scss')
  ],
  directives: [SideHeader],
  template: `
    <root>
    
      <header></header>

     <main>
        <router-outlet></router-outlet>
      </main>
      
    </root>
  `
})
@RouteConfig([
  {path: '/', name: 'Index', component: Home, useAsDefault: true},
  {path: '/blog', name: 'Blog', component: Blog},
  {path: '/node/:id', name: 'Node', loader: () => require('es6-promise!./node')('Node')},
  {path: '/search/:key', name: 'Search', loader: ()=> require('es6-promise!./search')('Search')},
  {path: '/category/:id', name: 'Category', loader: ()=> require('es6-promise!./category')('Category')},
  {path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About')},
  {path: '/resume', name: 'Resume', loader: () => require('es6-promise!./resume')('Resume')}
])
export class App {
  loading = false;

  constructor(public appState:AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
