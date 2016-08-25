import {Component, Input, ViewChild} from '@angular/core';
import {Collection, WpHelper, QueryArgs} from "ng2-wp-api";

import {AppState} from "../../app.service";
import {Carousel} from '../carousel';
import {SmallCard} from '../../views/small-card';

@Component({
  selector: 'related-posts',
  template: require('./related.html'),
  directives: [Collection, Carousel, SmallCard],
})

export class RelatedPosts {

  @Input() tags:any;
  @Input() postId:string;

  endpoint = WpHelper.Endpoint.Posts;
  args:QueryArgs;
  posts:any;

  @ViewChild(Collection) collection:Collection;

  flickityOptions:any;

  constructor(private appState:AppState) {
    this.flickityOptions = {
      contain: true,
      prevNextButtons: false
    }
    appState.set('loading', true);
  }

  ngOnInit() {

    if (!this.postId) {
      console.warn("[Related Posts]: Please provide postId");
      return;
    }
    if (this.tags.length < 1) {
      console.warn("[Related Posts]: current post has no related posts.");
      return;
    }
    /** extract only tags names to tagNames */
    let tagNames = [];
    this.tags.map((tag)=> {
      tagNames.push(tag.slug);
    });

    this.args = new QueryArgs({
      filter: {
        tag: tagNames.toString(),
        post__not_in: [this.postId]
      },
      _embed: true
    });

  }

  postsData(event) {
    if (event.error) {
      /** handle collection requests errors */
      console.warn("[Related] : " + event.error);
    }
    else {
      /** handle empty response */
      if(event.objects.length){
        this.posts = event.objects;
      }
    }
    this.appState.set("loading", false);
  }

}

/*
 * Related Posts Component: gets the related posts to the current post.
 * basically it will return the posts with the same tag of the current post except the current one.

 */
