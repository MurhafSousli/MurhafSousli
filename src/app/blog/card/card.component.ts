import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {WpPost} from "ng2-wp-api";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  post: WpPost;

  @Input()
  set data(data: any) {
    this.post = new WpPost(data);
  }

  getRouteName(){
    return (this.post.type() === 'project') ? '/projects' : '/blog';
  }

}
