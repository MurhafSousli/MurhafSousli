/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { FORM_PROVIDERS, HashLocationStrategy, LocationStrategy } from '@angular/common';
// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';
// Angular 2 Router
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';


//Disable the new Sanitizer
import { NO_SANITIZATION_PROVIDERS } from '../app/directives/disable-sanitizer';

/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS,
  NO_SANITIZATION_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
