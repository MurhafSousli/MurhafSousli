import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {WpPost} from "ng2-wp-api"

@Component({
  selector: 'small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallCardComponent {

  constructor() {
  }

  post: WpPost;
  postImageStyle: any;

  @Input()
  set data(data: any) {
    this.post = new WpPost(data);
    this.postImageStyle = this.getFeaturedImage();
  }

  getFeaturedImage() {
    return {
      'background-image': 'url(' + this.post.featuredImageUrl('medium') + ')'
    };
  }
}
