import {Component} from '@angular/core';
import {Collection, WpHelper} from 'ng2-wp-api/ng2-wp-api';

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

  endpoint = WpHelper.Endpoint.Posts;

}

/*
 * Project Component displays Projects page, currently used in Resume Component.
    TODO: add projects to navigation menu
 */
