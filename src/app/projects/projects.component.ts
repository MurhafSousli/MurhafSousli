import { Component } from '@angular/core';
import { Collection} from '../partials/collection';
import { Helper } from '../service';

@Component({
  selector: 'projects',
  directives: [Collection],
  template: `
    <div class="card-container">
      <collection [endpoint]="endpoint"></collection>
    </div>
  `
})
export class Projects {

  endpoint = Helper.WpEndpoint.Posts;
  constructor(){

  }
}
