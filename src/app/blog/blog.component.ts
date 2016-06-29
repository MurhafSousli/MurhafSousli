import { Component } from '@angular/core';
import { Collection} from '../partials/collection';
import { Helper } from '../service';

@Component({
  selector: 'blog',
  directives: [Collection],
  template: require('./blog.html')
})
export class Blog {

  endpoint = Helper.WpEndpoint.Posts;
  constructor(){

  }
}
