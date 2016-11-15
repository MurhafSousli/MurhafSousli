import {Component, OnInit, HostListener, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {WpService, WpCollectionComponent, CollectionResponse} from "ng2-wp-api";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {

  projects;
  endpoint = '/wp-json/wp/v2/projects/';
  noResponse;

  args = {
    per_page: 4,
    _embed: true,
    filter: {}
  };
  /** Collection Component reference */
  @ViewChild(WpCollectionComponent) collection: WpCollectionComponent;


  constructor(private _wpService: WpService) {
  }

  ngOnInit() {
  }

  wpResponse(event: CollectionResponse) {
    if (event.error) {
      this.noResponse = "Server Error";
    }
    else {
      if (event.data && event.data.length) {
        this.projects = event.data;
        this.noResponse = false;
      }
      else {
        this.noResponse = "Empty Results...";
      }
    }
  }

  /** Track page scroll */
  @HostListener('window:scroll', ['$event'])
  trackScroll(e) {
    /** Load more posts when scroll reach the bottom */
    if (e.target && e.target.scrollingElement) {
      let currPos = e.target.scrollingElement.scrollTop + window.innerHeight + 200;
      let targetPos = e.target.scrollingElement.scrollHeight;
      /*
       * check when user scroll is 200px to bottom of the page
       */
      if (currPos >= targetPos && !this._wpService.config.loading.getValue()) {
        this.collection.more();
      }
    }
  }
}
