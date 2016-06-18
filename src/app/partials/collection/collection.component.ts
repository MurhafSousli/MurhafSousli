import {Component, Input} from '@angular/core';
import {WpCollection, Helper} from '../../service';
import {MASONRY_DIRECTIVES} from '../../directives/masonry-layout';
import {PostItem} from '../post-item';
import {Args} from "../../service/models";


@Component({
  selector: 'collection',
  template: require('./collection.html'),
  directives: [MASONRY_DIRECTIVES, PostItem],
  providers: [WpCollection]
})

export class Collection {

  data;
  @Input() endpoint:Helper.WpEndpoint;
  @Input() args: Args;

  constructor(public service:WpCollection) {
  }

  ngOnInit() {
    //check if args is undefined
    if(!this.args){
      this.args = new Args();
    }
    //add embed to args.
    this.args._embed = true;
    this.fetchItems();
  }

  fetchItems() {
    this.data = [];
    this.service.setEndpoint(this.endpoint);
    this.service.fetch(this.args).subscribe(
      (res) => {
        this.data = res;
      },
      err => console.log(err)
    );
  }

  fetchMore() {
    this.service.more().subscribe(
      res => {
        this.data.concat(res);
      },
      err => console.log(err)
    );
  }

}


