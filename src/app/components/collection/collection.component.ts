import {Component, Input, Output, EventEmitter, SimpleChange} from '@angular/core';

import {WpCollection} from 'ng2-wp-api/ng2-wp-api';

@Component({
  selector: 'collection',
  providers: [WpCollection],
  template: `<ng-content></ng-content>`
})

export class Collection {

  @Input() endpoint;
  @Input() args;

  @Output() response = new EventEmitter();

  private data;

  constructor(private wpCollection:WpCollection) {
  }

  ngOnChanges(changes:{[propName:string]:SimpleChange}) {
    let prevArgs = changes['args'].previousValue;
    let newArgs = changes['args'].currentValue;
    if (prevArgs != newArgs) {
      setTimeout(() => this.fetchItems(newArgs));
    }
  }

  fetchItems(args) {
    this.wpCollection.Endpoint("564654").get(args).subscribe(
      (res) => {
        this.data = res;
        this.response.emit({
          objects: this.data,
          currentPage: this.wpCollection.service.currentPage,
          totalPages: this.wpCollection.service.totalPages,
          totalObjects: this.wpCollection.service.totalObjects
        });
      },
      (err) => {
        this.response.emit({error: err});
      }
    );
  }

  fetchMore() {
    this.wpCollection.Endpoint(this.endpoint).more().subscribe(
      (res) => {
        this.data = this.data.concat(res);
        this.response.emit({
          objects: this.data,
          currentPage: this.wpCollection.service.currentPage,
          totalPages: this.wpCollection.service.totalPages,
          totalObjects: this.wpCollection.service.totalObjects
        });
      },
      (err) => {
        this.response.emit({error: err});
      }
    );
  }

  hasMore() {
    return this.wpCollection.service.hasMore();
  }

}


/*
 * Collection component fetches data from WpCollection service,
 * it has 2 properties:
 *  - @INPUT: args
 *  - @INPUT: endpoint
 *  - @OUTPUT: response
 *  Data are fetched when args changes. (useful for search)
 *  Automatically loads more posts when user scroll is close to bottom of the page,
 *  using ng2-scrollspy which listens to user scroll,
 *  for more info visit : https://github.com/JonnyBGod/ng2-scrollspy
 */
