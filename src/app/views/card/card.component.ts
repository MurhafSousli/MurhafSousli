import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Post} from "ng2-wp-api";

@Component({
  selector: 'card',
  template: require('./card.html')
})

export class Card {
  post: Post;
  @Input()
  set data(data: any) {
    this.post = new Post(data);
  }

  constructor(private router:Router){

  }

  navigate(post){
    if(post.type() == "project")
      this.router.navigate(['/projects/' + post.id()])
    else
      this.router.navigate(['/posts/' + post.id()])
  }
}
