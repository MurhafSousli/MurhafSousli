import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WpQueryArgs, WpEndpoint, ModelResponse} from "ng2-wp-api";

@Component({
  selector: 'post',
  templateUrl: 'single.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleComponent implements OnInit {

  endpoint;
  id;
  args = new WpQueryArgs({
    _embed: true
  });

  post;

  constructor(private route: ActivatedRoute, private  router:Router) {
  }

  ngOnInit() {

    if (this.route.snapshot.url[0].path === "blog") {
      this.endpoint = WpEndpoint.posts;
    }
    else {
      this.endpoint = "/wp-json/wp/v2/projects/";
    }

    this.route.params.subscribe((params)=> {
      this.id = +params['id'];
    })
  }

  wpResponse(event: ModelResponse) {
    if (event.error) {
      this.router.navigate(['404']);
    }
    else {
      this.post = event.data;
    }
  }

}
