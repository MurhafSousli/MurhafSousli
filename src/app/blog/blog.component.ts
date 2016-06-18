import { Component } from '@angular/core';
import { Collection} from '../partials/collection';
import { Helper } from '../service';

@Component({
  selector: 'blog',
  directives: [Collection],
  template: `
    <h1>Blog</h1>
    <div class="card-container">
      <collection [endpoint]="endpoint"></collection>
    </div>
  `
})
export class Blog {

  endpoint = Helper.WpEndpoint.Posts;
  constructor(){

  }
}
