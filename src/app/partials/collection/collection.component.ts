import {Component, Input} from '@angular/core';
import {WpCollection, Helper} from '../../service';
import {Card} from '../../views/card';
import {Args} from "../../service/models";

@Component({
  selector: 'collection',
  template: require('./collection.html'),
  directives: [Card],
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

  /*
    TODO: Add load on scroll feature with loading animation, check if masonry does that out of the box.
   */

}


