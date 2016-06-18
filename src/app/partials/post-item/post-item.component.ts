import {Component, Input} from '@angular/core';
import {Post} from "../../service/models";

@Component({
  selector: 'post-item',
  template: require('./post-item.html'),
  styles: [require('./post-item.scss')]
})

export class PostItem {
  @Input() data;
  post: Post;
  constructor() {
  }

  ngOnInit() {
    this.post = new Post(this.data);
  }
}
