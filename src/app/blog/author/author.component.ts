import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {WpUser} from "ng2-wp-api";

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorComponent {

  author: WpUser;
  avatar: string;
  active: boolean = false;

  @Input()
  set authors(authors: any) {
    if (authors.length) {
      this.author = authors[0];
      this.avatar = authors[0].avatar_urls['96'];
    }
  }


}
