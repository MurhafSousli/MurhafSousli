import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {Home} from './home';
import {Blog} from './blog';
import {Header} from './partials/header';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('../assets/style/style.scss'),
    require('./app.scss')
  ],
  directives: [Header],
  template: `
     <header></header>
     <main>
      <router-outlet></router-outlet>
     </main>
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

  constructor() {

  }


}
