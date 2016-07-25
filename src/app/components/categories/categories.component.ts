import {Component, ViewChild} from '@angular/core';
import {Collection, WpHelper, QueryArgs} from 'ng2-wp-api/ng2-wp-api';

import {AppState} from "../../app.service";

@Component({
  selector: 'categories',
  template: require('./categories.html'),
  directives: [Collection],
})

export class Categories {

  endpoint = WpHelper.Endpoint.Categories;
  args;
  cats;

  @ViewChild(Collection) collection:Collection;

  constructor(private appState:AppState
  ) {

    setTimeout(()=> this.appState.state['loading'] = true);
  }

  ngOnInit() {
    this.args = new QueryArgs();
    /** TODO: add filter to get all categories at once */
  }

  catsData(event) {
    if (event.error) {
      console.log(event.error);
    }
    else {
      this.cats = event.objects;
    }
    this.appState.set("loading", false);
  }

}

/*
 * Categories component displays categoires links.
 */
