import {Component} from '@angular/core';
import {RouteParams} from "@angular/router-deprecated";
import {Args} from "../service/models";
import {Helper} from '../service';
import {Collection} from "../partials/collection";

@Component({
  selector: 'search',
  template: `
    <collection [endpoint]="endpoint" [args]="args"></collection>
  `,
  directives: [Collection]
})
export class Search {

  args: Args;
  endpoint = Helper.WpEndpoint.Posts;

  constructor(private _param: RouteParams){
    this.args = new Args();
    this.args.search = this._param.get("key");
  }

}
