import {Component, Input} from '@angular/core';
import {User} from "ng2-wp-api";

@Component({
  selector: 'author',
  template: require('./author.html')
})

export class Author{

  author:User;
  avatar: string;

  @Input()
  set authors(authors:any) {
    if(authors.length){
      this.author = authors[0];
      this.avatar = authors[0].avatar_urls['96'];
    }
  }

}
