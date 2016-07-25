import {Component, ViewChild, ElementRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Collection, WpHelper, QueryArgs} from 'ng2-wp-api/ng2-wp-api';

import {ScrollSpyService, ScrollSpyDirective} from "ng2-scrollspy";

import {Card} from "../../views/card";
import {AppState} from "../../app.service";
import {Categories} from "../../components/categories";

@Component({
  selector: 'blog',
  providers: [ScrollSpyService],
  template: require('./blog.html'),
  directives: [Card, Collection, ScrollSpyDirective, Categories],
})

export class Blog {

  endpoint = WpHelper.Endpoint.Posts;
  args:QueryArgs;
  posts;

  /** display search panel */
  activeSearch:boolean = false;
  activeCats:boolean = false;

  @ViewChild(Collection) collection:Collection;
  @ViewChild("overlay") overlayRef:ElementRef;
  @ViewChild("category") categoryRef:ElementRef;

  categoryDom:HTMLElement;

  private sub:any;


  constructor(private appState:AppState,
              private scrollSpyService:ScrollSpyService,
              private route:ActivatedRoute) {
    appState.set('loading', true);

  }

  ngOnInit() {

    this.categoryDom = this.categoryRef.nativeElement;
    /** default blog arguments */
    let args = new QueryArgs();
    args._embed = true;
    args.per_page = 4;
    this.args = args;

    this.sub = this.route.params.subscribe(params => {
      /** update the blog when category id changes. **/
      this.appState.set('loading', true);
      args = JSON.parse(JSON.stringify(this.args));
      args.filter = {cat: params['id']};

      this.args = args;
    });
  }

  ngAfterViewInit() {
    this.scrollSpyService.getObservable('window').subscribe((e:any) => {
      if (e.target.scrollingElement) {
        let currPos = e.target.scrollingElement.scrollTop + window.innerHeight + 200;
        let targetPos = e.target.scrollingElement.scrollHeight;
        /*
         It will fire when the user scroll >= 200px from page bottom
         && loading state is false
         */
        if (currPos >= targetPos && !this.appState.get('loading')) {
          if (this.collection.hasMore()) {
            this.appState['loading'] = true;
            this.collection.more();
          }
        }
      }
    });

  }

  postsData(event) {
    if (event.error) {
      /** handle collection requests errors */
      console.log(event.error);
    }
    else {
      this.posts = event.objects;
    }
    this.appState.set('loading', false);
  }

  search(key:string) {
    let args = JSON.parse(JSON.stringify(this.args));
    /** remove category from args */
    args.filter = {};
    args.search = key;
    this.appState.set('loading', true);
    this.args = args;

    this.activeSearch = false;
    this.activeCats = false;
  }

  toggleSearch(flag) {
    this.activeSearch = flag;
    this.activeCats = false;
    this.categoryDom.style.height = '0';
  }

  toggleCats(flag) {
    this.activeCats = flag;
    this.activeSearch = false;

    if(this.activeCats){
      this.categoryDom.style.height = this.categoryHeight();
    }
    else{
      this.categoryDom.style.height = '0';
    }
  }

  categoryHeight() {
    let overlayDom:HTMLElement = this.overlayRef.nativeElement;

    let viewheight = window.innerHeight;
    let overlay = overlayDom.scrollHeight;
    return ( viewheight - overlay) + "px";
  }

}

/*
 * Blog component displays blog page.
 */
