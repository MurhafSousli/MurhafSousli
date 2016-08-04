import {Component, Input} from '@angular/core';
import {Post} from "ng2-wp-api/ng2-wp-api";

@Component({
  selector: 'small-card',
  template: require('./small-card.html')
})

export class SmallCard {

  post:Post;
  postImageStyle: any;

  @Input()
  set data(data:any) {
    this.post = new Post(data);
    this.postImageStyle = this.getFeaturedImage();
  }

  getFeaturedImage() {
    return  {
      'background-image': 'url(' + this.post.featuredImageUrl('medium') + ')'
    };
  }
}
