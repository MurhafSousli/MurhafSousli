/*
 * These are globally available services in any component or any other service
 */

// Angular 2
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';
// Angular 2 Router
import { provideRouter } from '@angular/router';
// Angular 2 forms
import { disableDeprecatedForms, provideForms } from '@angular/forms';

// AngularClass
import { provideWebpack } from '@angularclass/webpack-toolkit';
import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';


import { routes, asyncRoutes, prefetchRouteCallbacks } from '../app/app.routes';
import { APP_RESOLVER_PROVIDERS } from '../app/app.resolver';
/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/

//Disable the new Sanitizer
import {NO_SANITIZATION_PROVIDERS} from '../app/directives/disable-sanitizer';
//WordPress Service
import {WORDPRESS_PROVIDERS} from "ng2-wp-api/ng2-wp-api";
// To set site title on navigation
import {Title} from '@angular/platform-browser';

//import dynamic meta service and set default meta tags.
import { MetaConfig, MetaService } from 'ng2-meta';

let metaConfig = new MetaConfig({
  defaults: {
    title: 'Murhaf Sousli | Blog & Resume'
  }
});


export const APPLICATION_PROVIDERS = [
  // new Angular 2 forms
  disableDeprecatedForms(),
  provideForms(),

  ...APP_RESOLVER_PROVIDERS,

  provideRouter(routes),
  provideWebpack(asyncRoutes),
  providePrefetchIdleCallbacks(prefetchRouteCallbacks),

  ...HTTP_PROVIDERS,

  NO_SANITIZATION_PROVIDERS,
  WORDPRESS_PROVIDERS,
  Title,
  MetaService,
  {provide: 'meta.config', useValue: metaConfig},

  //{ provide: LocationStrategy, useClass: HashLocationStrategy }
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
