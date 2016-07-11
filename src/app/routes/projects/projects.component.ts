import {Component} from '@angular/core';
import {Collection} from '../../components/collection';
import {WpHelper} from '../../service';

@Component({
  selector: 'projects',
  directives: [Collection],
  template: `
    <div class="page-title">
      <h1>Projects</h1>
    </div>
    <div class="page-content container">
      <collection [endpoint]="endpoint"></collection>
    </div>
  `
})
export class Projects {

  endpoint = WpHelper.WpEndpoint.Posts;

  constructor() {

  }
}
