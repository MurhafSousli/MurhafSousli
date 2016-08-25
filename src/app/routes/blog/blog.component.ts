import {Component, ViewChild, ElementRef, OnInit, OnDestroy, HostListener, Renderer} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Collection, WpHelper, QueryArgs} from 'ng2-wp-api';

import {WideCard} from "../../views";
import {AppState} from "../../app.service";
import {Categories} from "../../components/categories";

@Component({
  selector: 'blog',
  template: require('./blog.html'),
  directives: [WideCard, Collection, Categories]
})

export class Blog implements OnInit, OnDestroy {

  endpoint = WpHelper.Endpoint.Posts;
  args: QueryArgs;
  posts: any;
  empty: boolean | string = false;

  /** Collection ref to get more posts */
  @ViewChild(Collection) collection: Collection;

  /** Search & Categories */
  activeSearch: boolean = false;
  activeCats: boolean = false;
  @ViewChild("headerOverlay") overlayRef: ElementRef;
  @ViewChild("category") categoryRef: ElementRef;

  private paramsObs: any;

  constructor(private appState: AppState,
              private router: Router,
              private route: ActivatedRoute,
              private renderer: Renderer) {
    appState.set('loading', true);
  }

  ngOnInit() {
    /** listen for parameter id changes */
    this.paramsObs = this.route.params.subscribe(params => {
      this.updateComponent(params['id']);
    });
  }

  ngOnDestroy() {
    this.paramsObs.unsubscribe();
  }

  updateComponent(catId: string) {
    /** Show loading until new post data is received */
    this.appState.set('loading', true);
    this.empty = false;
    /** Update args */
    this.args = new QueryArgs({
        _embed: true,
        per_page: 4,
        filter: {cat: catId || null}
      }
    );


    this.toggleSearch(false);
    this.toggleCats(false);
  }

  /** Handle received posts */
  postsData(event) {
    if (event.error) {
      console.log("[Blog]: " + event.error);
      this.router.navigate(['/404']);
    }
    else {
      this.posts = event.objects;
      /** if response is empty */
      if (event.objects.length) {
        this.empty = false;
      }
      else {
        if (this.args.search) {
          this.empty = "No results found for '" + this.args.search + "'";
        }
        else if (this.args.filter.cat) {
          this.empty = "Nothing to show..."
        }
        else {
          this.empty = "Coming soon...";
        }
      }
    }
    this.appState.set('loading', false);
  }

  /** Track page scroll */
  @HostListener('window:scroll', ['$event'])
  trackScroll(e) {
    /** Load more posts on scroll */
    if (e.target && e.target.scrollingElement) {
      let currPos = e.target.scrollingElement.scrollTop + window.innerHeight + 200;
      let targetPos = e.target.scrollingElement.scrollHeight;
      /*
       * check when user scroll is 200px to bottom of the page
       */
      if (currPos >= targetPos && !this.appState.get('loading')){
        if (this.collection.hasMore()) {
          this.appState.set('loading', true);
          this.collection.more();
        }
      }
    }
  }

  search(key: string) {
    if (key == "") return;
    this.appState.set('loading', true)
    /** Keep previous args, remove cat filter and add search key */
    let args = new QueryArgs(this.args);
    args.page = undefined;
    args.filter = {};
    args.search = key;
    this.args = args;

    this.toggleSearch(false);
    this.toggleCats(false);
  }

  toggleSearch(flag) {
    this.activeSearch = flag;
    this.activeCats = false;
    //close categories if open
    this.renderer.setElementStyle(this.categoryRef.nativeElement, 'height', '0');
  }

  toggleCats(flag) {
    this.activeCats = flag;
    this.activeSearch = false;

    if (this.activeCats) {
      this.renderer.setElementStyle(this.categoryRef.nativeElement, 'height', this.categoryHeight() + 'px');
    }
    else {
      this.renderer.setElementStyle(this.categoryRef.nativeElement, 'height', '0');
    }
  }

  /** Get the remaining view height for category overlay */
  categoryHeight() {
    let viewheight = window.innerHeight;
    let overlay = this.overlayRef.nativeElement.scrollHeight;
    return viewheight - overlay;
  }

}

/*
 * Blog component displays blog page.
 */
