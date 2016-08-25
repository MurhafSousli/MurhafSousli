import {Component, DoCheck} from '@angular/core';
import {Router} from '@angular/router';
import {Model, WpHelper, Post} from 'ng2-wp-api';

import {AppState} from "../../app.service";

@Component({
  selector: 'about',
  template: require('./about.html'),
  directives: [Model]
})
export class About implements DoCheck{

  endpoint = WpHelper.Endpoint.Pages;
  id;
  page;

  constructor(private appState:AppState, private router:Router) {
    appState.set('loading', true);
  }

  ngDoCheck(){
    /** check if appState have received app data */
    let data = this.appState.get("data");
    if(!this.id && data.hasOwnProperty('pages')){
      this.id = (<any>this.appState.get("data").pages[3]).id;
    }
  }

  pageData(event) {
    if (event.error) {
      /** handle collection requests errors */
      console.warn("[About] : " + event.error);
      this.router.navigate(['/404']);
    }
    else {
      this.page = new Post(event.object);
    }
    this.appState.set("loading", false);
  }

}

/*
 * About component displays about page
 *
 */
