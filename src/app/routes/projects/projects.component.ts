import {Component} from '@angular/core';

import {ProjectsList} from '../../components/projects';

@Component({
  selector: 'projects',
  directives: [ProjectsList],
  template: require('./projects.html')
})
export class Projects {

}
