import {
  Component,
  OnInit,
  OnDestroy,
  Type,
  ViewContainerRef,
  ComponentResolver,
  ComponentRef,
  ComponentFactory,
  ViewChild
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Model, QueryArgs, WpHelper} from "ng2-wp-api/ng2-wp-api";

import {Single} from "../../views";
import {AppState} from "../../app.service";

@Component({
  selector: 'single-post',
  template: `
    <model [endpoint]="endpoint" [id]="id" [args]="args" (response)="postData($event)">
    </model>
  `,
  directives: [Model]
})

export class SinglePost implements OnInit, OnDestroy {

  id:string;
  endpoint = WpHelper.Endpoint.Posts;
  args:QueryArgs;

  cmpRef:ComponentRef<any>;
  @ViewChild(Model, {read: ViewContainerRef}) model:ViewContainerRef;

  private paramsObs:any;

  constructor(private route:ActivatedRoute,
              private resolver:ComponentResolver,
              private router:Router,
              private appState:AppState) {
    appState.set('loading', true);
  }

  ngOnInit() {

    /** update the component when id changes */
    this.paramsObs = this.route.params.subscribe(params => {
      this.updateComponent(params['id']);
    });
  }

  ngOnDestroy() {
    this.paramsObs.unsubscribe();
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  updateComponent(id:string) {
    /** Destroy single component if already created */
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
    /** Show loading until new post data is received */
    this.appState.set('loading', true);
    /** Update id */
    this.id = id;
    /** Update args */
    this.args = new QueryArgs({
      _embed: true
    });
  }

  /** Handle received post */
  postData(event) {
    if (event.error) {
      console.log("[Blog]: " + event.error);
      this.router.navigate(['/404']);
    }
    else {
      this.resolver.resolveComponent(<Type>Single).then((factory:ComponentFactory<any>) => {
          this.cmpRef = this.model.createComponent(factory);
          this.cmpRef.instance.data = event.object;
      });
    }
    this.appState.set('loading', false);
  }
}

