import {Component, Input, ViewChild} from '@angular/core';
import {Collection, WpHelper, QueryArgs} from "ng2-wp-api/ng2-wp-api";

import {AppState} from "../../app.service";
import {Carousel} from '../carousel';
import {SmallCard} from '../../views/small-card';

@Component({
  selector: 'related-posts',
  template: require('./related.html'),
  directives: [Collection, Carousel, SmallCard],
})

export class RelatedPosts {

  @Input() tags;
  @Input() postId;

  endpoint = WpHelper.Endpoint.Posts;
  args:QueryArgs;
  posts;

  @ViewChild(Collection) collection:Collection;

  constructor(private appState:AppState) {
    appState.set('loading', true);
  }

  ngOnInit() {
    if (!this.postId) {
      console.log("[Related Posts]: Please provide postId");
      return;
    }
    if (this.tags.length < 1) {
      console.log("[Related Posts]: current post has no related posts.");
      return;
    }
    /** extract only tags names to tagNames */
    let tagNames = [];
    this.tags.map((tag)=> {
      tagNames.push(tag.slug);
    });
    let args = new QueryArgs();
    args.filter = {
      tag: tagNames.toString(),
      //post__not_in: this.postId
    };
    args._embed = true;
    this.args = args;

  }

  postsData(event) {
    if (event.error) {
      /** handle collection requests errors */
      console.log(event.error);
    }
    else {
      this.posts = event.objects;
    }
    this.appState.set("loading", false);
  }

}

/*
 TODO: current post should not be listed in related posts, fix arguments.
 */

/*
 * Related Posts Component: gets the related posts to the current post.
 * basically it will return the posts with the same tag of the current post,
 * and should NOT list it with them.

 */
