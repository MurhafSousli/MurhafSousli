import {Component, Injectable} from '@angular/core';
import { Collection} from '../partials/collection';
import { Helper } from '../service';

@Injectable()
@Component({
  selector: 'blog',
  template: require('./blog.html'),
  directives: [Collection],
})
export class Blog{

  endpoint = Helper.WpEndpoint.Posts;
  //bgPattern = "url('../../assets/img/80da66f1.png') repeat";
  constructor() {
  }
}
