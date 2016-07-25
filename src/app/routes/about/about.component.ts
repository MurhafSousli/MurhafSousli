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

  ngOnInit() {
    this.id = (<any>this.appState.get("data").pages[3]).id;
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
 * About component displays about page, we get the page Id from appState.data.pages.about
 *
 *  TODO: change about component to dynamic page component which displays page by ID.
 *
 *  TODO: display sub pages if available.
 *  */
