import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Post} from "ng2-wp-api/ng2-wp-api";

@Component({
  selector: 'wide-card',
  template: require('./wide-card.html')
})

export class WideCard {
  post: Post;
  postImageStyle: any;

  @Input()
  set data(data: any) {
    this.post = new Post(data);
    this.postImageStyle = this.getFeaturedImage();
  }

  constructor(private router:Router){

  }

  navigate(post){
    if(post.type() == "project")
      this.router.navigate(['/projects/' + post.id()])
    else
      this.router.navigate(['/posts/' + post.id()])
  }

  getFeaturedImage() {
    return  {
      'background-image': 'url(' + this.post.featuredImageUrl('large') + ')'
    };
  }
}
