import {Component} from '@angular/core';

import {ProjectsList} from '../../components/projects';

@Component({
  selector: 'projects',
  directives: [ProjectsList],
  template: `
    <div class="post page blog">
      <div class="post-header">
        <div #overlay class="post-overlay">
          <div class="post-title">
            <h1>PROJECTS</h1>
          </div>
        </div>
      </div>
      <div class="post-body">
        <div class="post-content">
          <projects></projects>
        </div>
      </div>
    </div>
  `
})
export class Projects {

}
