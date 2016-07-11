/*
 This is a static class contains all helper functions for WordPress service.
 */

import {Headers} from '@angular/http';
import {AppState} from "../app.service";

export module WpHelper {

  export function baseUrl() {
    return 'http://portfolio.murhafsousli.com/wp-json';
  }

  export function getBodyCredentials(encodedCred:string):string {
    let cred = atob(encodedCred).split(':');
    return 'username=' + cred[0] + '&password=' + cred[1];
  }

  export function getHeaders(appState:AppState):Headers {
    let headers = new Headers();
    let userCred = 'Basic ' + appState.get('keys');
    headers.append('Authorization', userCred);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return headers;
  }

  export enum WpEndpoint{
    Root = <any>'',
    Users = <any> '/wp/v2/users/',
    Authentication = <any>'/jwt-auth/v1/token/',
    Posts = <any>'/wp/v2/posts/',
    Categories = <any>'/wp/v2/categories/',
    Projects = <any>'/wp/v2/projects/',
    Experiences = <any>'/wp/v2/experiences/',
    Pages = <any>'/wp/v2/pages/'
  }


  /*
   * generateUrl returns the final URL with arguments.
   */
  export function generateUrl(actionUrl, args):string {
    if (args) {
      //add args to baseURL
      actionUrl += '?' + serialize(args);
      //assign currentPage to args.page otherwise to 1
      this.currentPage = (args.page) ? +args.page : 1;
    }
    console.log('[WPService]: ' + actionUrl);
    return actionUrl;
  }

  /*
   * Serialize the input object. called by generateUrl()
   */
  var serialize = function (obj, prefix?):string {
    var str = [];
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
        str.push(typeof v == "object" ?
          serialize(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
    return str.join("&");
  }

}

