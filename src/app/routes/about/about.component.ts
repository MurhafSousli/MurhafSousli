import {Component, ChangeDetectionStrategy} from '@angular/core';
import {WpEndpoint, WpPost, ModelResponse} from "ng2-wp-api";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent{

  id = 3124;
  page: WpPost;
  endpoint = WpEndpoint.pages;
  noResponse;

  constructor() {
  }

  wpResponse(event: ModelResponse){
    if (event.error) {
      this.noResponse = "Server Error";
    }
    else {
      this.page = new WpPost(event.data);
    }
  }

}
