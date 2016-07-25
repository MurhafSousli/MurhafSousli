import {
  Component,
  Type,
  ViewContainerRef,
  ViewChild,
  ComponentResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WpModel, Post, QueryArgs} from "ng2-wp-api/ng2-wp-api";

import {Single} from "../../views/single";
import {AppState} from "../../app.service";

@Component({
  providers: [WpModel],
  selector: 'node',
  template: '<div #target></div>'
})

export class Node {

  private id:string;
  private isViewInitialized:boolean = false;
  private response:Post;args: QueryArgs;

  private sub: any;

  cmpRef:ComponentRef<any>;

  @ViewChild('target', {read: ViewContainerRef}) target;

  constructor(private route:ActivatedRoute,
              private resolver:ComponentResolver,
              private service:WpModel,
              private appState:AppState) {

  }

  ngOnInit(){
    let args = new QueryArgs();
    args._embed = true;
    this.args = args;

    this.sub = this.route.params.subscribe(params => {
      /** update the component when id changes */
      this.id = params['id'];
      this.updateComponent();
    });
  }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    setTimeout(()=>this.fetchPost());
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  fetchPost() {
    this.appState.set('loading', true);
    this.service.Posts().get(this.id, this.args).subscribe(
      (res) => {
        this.response = new Post(res);

        this.resolver.resolveComponent(<Type>Single).then((factory:ComponentFactory<any>) => {
          this.cmpRef = this.target.createComponent(factory);
          this.cmpRef.instance.post = this.response;
          this.appState.set('loading', false);
        });
      },
      err=>console.log(err)
    );
  }

  /*
   TODO: Add condition to display post layout or project layout according to the post type.
   */
}

