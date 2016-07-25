import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WpHelper, QueryArgs} from "ng2-wp-api/ng2-wp-api";

import {Collection} from "../../components/collection";

@Component({
  selector: 'search',
  template: `
    <collection [endpoint]="endpoint" [args]="args"></collection>
  `,
  directives: [Collection]
})
export class Search {

  args: QueryArgs;
  endpoint = WpHelper.Endpoint.Posts;

  constructor(route: ActivatedRoute){
    this.args = new QueryArgs();
    this.args.search = route.snapshot.params["key"];
  }

}


/*
 * TODO: remove this and integrate search in blog component
 */
