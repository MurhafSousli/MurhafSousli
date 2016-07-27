import {Component, ViewChild} from '@angular/core';
import {Collection, QueryArgs} from 'ng2-wp-api/ng2-wp-api';

import {AppState} from "../../app.service";
import {Card} from '../../views/card';

@Component({
  selector: 'projects',
  template: require('./projects.html'),
  directives: [Collection, Card],
})

export class ProjectsList {
  args;
  projects;

  @ViewChild(Collection) collection:Collection;

  constructor(private appState:AppState) {

    setTimeout(()=> this.appState.state['loading'] = true);
  }

  ngOnInit() {
    this.args = new QueryArgs();
  }

  projectsData(event) {
    if (event.error) {
      console.log(event.error);
    }
    else {
      this.projects = event.objects;
    }
    this.appState.set("loading", false);
  }
}

/*
 * Projects component displays projects collection.
 */
