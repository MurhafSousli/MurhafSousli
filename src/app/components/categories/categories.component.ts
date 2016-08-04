import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
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

  constructor(private appState:AppState,
              private router:Router) {

    setTimeout(()=> this.appState.set('loading', true));
  }

  ngOnInit() {
    /**  to get all categories at once */
    this.args = new QueryArgs({
      per_page: 100
    });
  }

  catsData(event) {
    if (event.error) {
      console.log('[Categories] : ' + event.error);
      this.router.navigate(['/404']);
    }
    else {
      this.cats = event.objects;
    }
    this.appState.set("loading", false);
  }

  navigate(catSlug) {
    this.router.navigate(['/blog/', catSlug]);
  }

}

/*
 * Categories component displays categoires links.
 */
