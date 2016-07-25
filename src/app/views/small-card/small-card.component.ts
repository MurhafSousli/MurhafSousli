import {Component, Input} from '@angular/core';
import {Post} from "ng2-wp-api/ng2-wp-api";

@Component({
  selector: 'small-card',
  template: require('./small-card.html')
})

export class SmallCard {
  @Input() data;
  post:Post;
  postImageStyle;

  ngOnInit() {
    this.post = new Post(this.data);
    this.postImageStyle = this.getFeaturedImage();
  }

  getFeaturedImage() {
    return {
      'background-image': 'url(' + this.post.featuredImageUrl('medium') + ')'
    };
  }
}
