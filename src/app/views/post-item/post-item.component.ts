import {Component, Input} from '@angular/core';
import {Post} from "ng2-wp-api/ng2-wp-api";

@Component({
  selector: 'post-item',
  template: require('./post-item.html')
})

export class PostItem {
  post: Post;

  @Input()
  set data(data: any) {
    this.post = new Post(data);
  }
}
