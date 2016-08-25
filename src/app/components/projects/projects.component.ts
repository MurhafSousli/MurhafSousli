import {Component, ViewChild, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {Collection, QueryArgs} from 'ng2-wp-api';

import {AppState} from "../../app.service";
import {WideCard} from '../../views';

@Component({
  selector: 'projects',
  template: require('./projects.html'),
  directives: [Collection, WideCard],
})

export class ProjectsList {
  args;
  projects;
  empty:boolean = false;

  @ViewChild(Collection) collection:Collection;

  constructor(private appState:AppState, private router:Router) {

    appState.set('loading', true);
  }

  ngOnInit() {
    this.args = new QueryArgs({
      per_page: 4,
      _embed: true
    });
  }

  projectsData(event) {
    if (event.error) {
      console.warn("[Projects] : " + event.error);
      this.router.navigate(['/404']);
    }
    else {
      this.projects = event.objects;
      if(!event.objects.length){
        this.empty = true;
      }
    }
    this.appState.set("loading", false);
  }

  /** Track page scroll */
  @HostListener('window:scroll', ['$event'])
  trackScroll(e) {
    /** Load more posts on scroll */

    let currPos = e.target.scrollingElement.scrollTop + window.innerHeight + 200;
    let targetPos = e.target.scrollingElement.scrollHeight;
    /*
     * It will fire when the user scroll >= 200px from page bottom
     * && loading state is false
     */
    if (currPos >= targetPos && !this.appState.get('loading')) {
      if (this.collection.hasMore()) {
        this.appState.set('loading', true);
        this.collection.more();
      }
    }
  }
}

/*
 * Projects component displays projects collection.
 */
