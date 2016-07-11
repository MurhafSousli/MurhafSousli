import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Args} from "../../service/models";
import {WpHelper} from '../../service';
import {Collection} from "../../components/collection";

@Component({
  selector: 'search',
  template: `
    <collection [endpoint]="endpoint" [args]="args"></collection>
  `,
  directives: [Collection]
})
export class Search {

  args: Args;
  endpoint = WpHelper.WpEndpoint.Posts;

  constructor(route: ActivatedRoute){
    this.args = new Args();
    this.args.search = route.snapshot.params["key"];
  }

}
