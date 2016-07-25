import {Component, Input} from '@angular/core';
import {Post} from "ng2-wp-api/ng2-wp-api";

@Component({
  selector: 'card',
  template: require('./card.html')
})

export class Card {
  @Input() data;
  post: Post;

  ngOnInit() {
    this.post = new Post(this.data);
  }
}
