import {Component, Input} from '@angular/core';
import {Post} from "../../service/models";

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
