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
              private router:Router
  ) {

    setTimeout(()=> this.appState.state['loading'] = true);
  }

  ngOnInit() {
    /**  to get all categories at once */
    let args = new QueryArgs();
    args.per_page = 100;
    this.args = args;
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

  navigate(catId){
    this.router.navigate(['/blog/', catId]);
  }

}

/*
 * Categories component displays categoires links.
 */
