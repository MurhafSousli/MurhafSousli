import {Component, Input} from '@angular/core';
import {WpCollection, WpHelper} from "../../service";
import {AppState} from "../../app.service";
import {Args} from "../../service/models";
import {Carousel} from '../carousel';
import {SmallCard} from '../../views/small-card';

@Component({
  selector: 'related-posts',
  template: require('./related.html'),
  directives: [Carousel, SmallCard],
  providers: [WpCollection]
})

export class RelatedPosts {

  data;
  @Input() tags;
  @Input() postId;
  args: Args;

  constructor(private service:WpCollection, private appState:AppState){
    appState.set('loading', true);
  }

  ngOnInit() {
    console.log('Related Posts');
    //check if args is undefined
    this.args = new Args();
    //this.args.search = this.tags[0];
    this.args.filter = {};
    this.args.filter['post_not_in'] = this.postId;
    //add embed to args.
    this.args._embed = true;
    this.fetchItems();
  }

  fetchItems() {
    this.data = [];
    this.service.setEndpoint(WpHelper.WpEndpoint.Posts);
    this.service.fetch(this.args).subscribe(
      (res) => {
        this.data = res;
        this.appState.set('loading', false);
      },
      err => console.log(err)
    );
  }
}

/*
  TODO: current post should not be listed in related posts, fix arguments. 
 */
