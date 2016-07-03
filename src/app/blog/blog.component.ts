import {Component, Injectable} from '@angular/core';
import { Collection} from '../partials/collection';
import { Helper } from '../service';
import {ScrollSpyElementDirective, ScrollSpyService} from 'ng2-scrollspy';

@Injectable()
@Component({
  selector: 'blog',
  template: require('./blog.html'),
  directives: [ScrollSpyElementDirective, Collection],
  providers: [ScrollSpyService]
})
export class Blog{

  endpoint = Helper.WpEndpoint.Posts;

  constructor(private scrollSpyService: ScrollSpyService) {
  }
  ngAfterViewInit() {
    this.scrollSpyService.getObservable('test').subscribe((e: any) => {
      console.log('ScrollSpy::test: ', e);
    });
  }
}
