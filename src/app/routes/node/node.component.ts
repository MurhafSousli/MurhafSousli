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
import {Single} from "../../views/single";
import {WpModel, WpHelper} from "../../service";
import {Post} from "../../service/models";
import {AppState} from "../../app.service";

@Component({
  providers: [WpModel],
  selector: 'node',
  template: '<div #target></div>'
})

export class Node {

  private id:string;
  private isViewInitialized:boolean = false;
  private response:Post;
  private sub: any;

  cmpRef:ComponentRef<any>;

  @ViewChild('target', {read: ViewContainerRef}) target;

  constructor(private route:ActivatedRoute,
              private resolver:ComponentResolver,
              private service:WpModel,
              private appState:AppState) {

    this.appState.set('loading', true);
 //   this.id = this.route.snapshot.params['id'];
    this.service.setEndpoint(WpHelper.WpEndpoint.Posts);
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      //update the id whenever it changes and update the component.
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
    this.fetchPost();
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

    console.log(this.id);
    this.service.getSingle(this.id + '?_embed=1').subscribe(
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

