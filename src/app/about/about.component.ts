import {Component} from '@angular/core';
import {WpModel, Helper} from "../service";
import {Post} from "../service/models/post.model";
import {AppState} from "../app.service";

@Component({
  providers: [WpModel],
  selector: 'about',
  template: require('./about.html')
})
export class About {
  pageId = 2913;
  response: any;
  bgPattern = "url('../../assets/img/77558ed2.png') repeat";
  constructor(private service:WpModel, private appState: AppState) {
    appState.set('loading', true);
  }
  ngOnInit(){
    this.fetchPage();
  }

  fetchPage() {
    this.service.setEndpoint(Helper.WpEndpoint.Pages);
    this.service.getSingle(this.pageId).subscribe(
      (res)=> {
        this.response = new Post(res);
        this.appState.set('loading', false);
      },
      err=> console.log(err));
  }
}
