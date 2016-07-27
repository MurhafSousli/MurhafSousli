import {Component} from '@angular/core';
import {AppState} from "../../app.service";

import {Model, WpHelper, Post} from 'ng2-wp-api/ng2-wp-api';

@Component({
  selector: 'about',
  template: require('./about.html'),
  directives: [Model]
})
export class About {

  endpoint = WpHelper.Endpoint.Pages;
  id;
  page;

  constructor(private appState:AppState) {
    appState.set('loading', true);
  }

  ngDoCheck(){
    /** check if appState have received app data */
    let data = this.appState.get("data");
    if(data.hasOwnProperty('pages') && !this.id){
      this.id = (<any>this.appState.get("data").pages[3]).id;
    }
  }

  pageData(event) {
    if (event.error) {
      /** handle collection requests errors */
      console.log(event.error);
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
