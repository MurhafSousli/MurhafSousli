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
import {Single} from "../views/single";
import {WpModel,Helper} from "../service";
import {Post} from "../service/models";

@Component({
  providers:[WpModel],
  selector: 'node',
  template: '<div #target></div>'
})

export class Node {

  private id:string;
  private isViewInitialized:boolean = false;
  private response:Post;

  cmpRef:ComponentRef<any>;

  @ViewChild('target', {read: ViewContainerRef}) target;

  constructor(private route: ActivatedRoute,
              private resolver: ComponentResolver,
              private service:WpModel
  ){
    this.id = this.route.snapshot.params['id'];
    this.service.setEndpoint(Helper.WpEndpoint.Posts);
  }

  updateComponent() {
    if(!this.isViewInitialized) {
      return;
    }
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
    this.fetchPost();
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  fetchPost(){

    console.log(this.id);
    this.service.getSingle(this.id + '?_embed=1').subscribe(
      (res) =>{
        this.response = new Post(res);

        this.resolver.resolveComponent(<Type>Single).then((factory:ComponentFactory<any>) => {
          this.cmpRef = this.target.createComponent(factory);
          this.cmpRef.instance.post = this.response;
        });
      },
      err=>console.log(err)
    );
  }
  /*
   TODO: Add condition to display post layout or project layout according to the post type.
   */
}

