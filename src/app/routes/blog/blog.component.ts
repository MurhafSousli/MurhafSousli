import {Component, Injectable} from '@angular/core';
import {Collection} from '../../components/collection';
import {WpHelper} from '../../service';

@Injectable()
@Component({
  selector: 'blog',
  template: require('./blog.html'),
  directives: [Collection],
})
export class Blog{

  endpoint = WpHelper.WpEndpoint.Posts;
  //bgPattern = "url('../../assets/img/80da66f1.png') repeat";
  constructor() {
  }
}
