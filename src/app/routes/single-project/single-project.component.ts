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
import {ActivatedRoute} from '@angular/router';
import {Model, QueryArgs} from "ng2-wp-api/ng2-wp-api";

import {Project} from "../../views/project";
import {AppState} from "../../app.service";

@Component({
  selector: 'single-project',
  template: `
    <model [endpoint]="'/wp-json/wp/v2/projects/'" [id]="id" [args]="args" (response)="postData($event)">
    </model>
  `,
  directives: [Model]
})

export class SingleProject implements OnInit, OnDestroy {

  id:string;
  args:QueryArgs;

  cmpRef:ComponentRef<any>;
  @ViewChild(Model, {read: ViewContainerRef}) model:ViewContainerRef;

  private paramsObs:any;

  constructor(private route:ActivatedRoute,
              private resolver:ComponentResolver,
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
    }
    else {
      this.resolver.resolveComponent(<Type>Project).then((factory:ComponentFactory<any>) => {
        this.cmpRef = this.model.createComponent(factory);
        this.cmpRef.instance.data = event.object;
      });
    }
    this.appState.set('loading', false);
  }
}

