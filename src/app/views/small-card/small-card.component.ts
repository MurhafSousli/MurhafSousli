import {Component, Input} from '@angular/core';
import {Post} from "../../service/models";

@Component({
  selector: 'small-card',
  template: `
    <div class="card small-card animated zoomIn">

  <div class="small-card-image" [ngStyle]="postImageStyle">
  </div>

  <div class="small-card-title">
    <h4>{{post.title()}}</h4>
  </div>

  <div class="small-card-footer">
    <a class="btn btn-small" [routerLink]=" ['/node/' + post.id()]">
      <i class="fa fa-link fa-1x" aria-hidden="true"></i> Open
    </a>
  </div>

</div>

  `
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
