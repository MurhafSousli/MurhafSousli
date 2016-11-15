import {
  Component, HostListener, ViewChild, AfterViewInit, ElementRef, Renderer,
  ChangeDetectionStrategy
} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WpCollectionComponent, CollectionResponse, WpEndpoint, WpQueryArgs, WpService} from "ng2-wp-api";

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements AfterViewInit {

  posts;
  endpoint = WpEndpoint.posts;
  args: WpQueryArgs;
  noResponse;

  private _defaultArgs = new WpQueryArgs({
    per_page: 4,
    _embed: true,
    filter: {}
  });

  /** Collection Component reference */
  @ViewChild(WpCollectionComponent) collection: WpCollectionComponent;

  constructor(private _wpService: WpService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _renderer: Renderer) {
  }

  wpResponse(event: CollectionResponse) {
    if (event.error) {
      this.noResponse = "Server Error";
    }
    else {
      if(event.data && event.data.length){
        this.posts = event.data;
        this.noResponse = false;
      }
      else{
        if (this.args.search) {
          this.noResponse = "No results found for '" + this.args.search + "'";
        }
        else if (this.args.filter.cat) {
          this.noResponse = "Nothing to show..."
        }
        else {
          this.noResponse = "Empty Results...";
        }
      }
    }
  }

  ngAfterViewInit() {
    this._route.params.subscribe((params) => {
      /** Empty the old results on refresh */
      this.posts = [];
      this.closeFilterBox();

      this.args = new WpQueryArgs(this._defaultArgs);
      this.args.filter['cat'] = params['id'] || null;
      this.args.search = params['search'] || null;
      this.collection.get(this.args);
    });

    this._renderer.setElementStyle(this.overlayRef.nativeElement, "background-image",
      'url("../../assets/img/cover.png")');


  }

  search(key) {
    if (key)
      this._router.navigate(['/blog', {search: key}]);
  }

  /** Track page scroll */
  @HostListener('window:scroll', ['$event'])
  trackScroll(e) {
    /** Load more posts when scroll reach the bottom */
    if (e.target && e.target.scrollingElement) {
      let currPos = e.target.scrollingElement.scrollTop + window.innerHeight + 200;
      let targetPos = e.target.scrollingElement.scrollHeight;
      /*
       * check when user scroll is 200px to bottom of the page
       */
      if (currPos >= targetPos && !this._wpService.config.loading.getValue()) {
        this.collection.more();
      }
    }
  }


  /** Search & Categories */
  searchBoxActive: boolean;
  catBoxActive: boolean;
  @ViewChild("headerOverlay") overlayRef: ElementRef;
  @ViewChild("categoryBox") categoryRef: ElementRef;
  @ViewChild("searchBox") searchRef: ElementRef;
  @ViewChild("searchInput") searchInput: ElementRef;

  closeFilterBox() {
    this.searchBoxActive = false;
    this.catBoxActive = false;

    this._renderer.setElementProperty(this.searchInput.nativeElement, 'value', '');
    this._renderer.setElementStyle(this.searchRef.nativeElement, 'height', '0');
    this._renderer.setElementStyle(this.categoryRef.nativeElement, 'height', '0');
  }

  openSearchBox(flag) {
    this.closeFilterBox();
    if (flag) {
      this.searchBoxActive = true;
      this._renderer.setElementStyle(this.searchRef.nativeElement, 'height', '150px');
    }
  }

  openCatsBox(flag) {
    this.closeFilterBox();
    if (flag) {
      this.catBoxActive = true;
      this._renderer.setElementStyle(this.categoryRef.nativeElement, 'height', this.categoryHeight() + 'px');
    }
  }

  setSearchClasses() {
    return {
      "fa-search": !this.searchBoxActive,
      "fa-times": this.searchBoxActive
    }
  }

  setCatClasses() {
    return {
      "fa-folder-open-o": !this.catBoxActive,
      "fa-times": this.catBoxActive
    }
  }

  /** Get the remaining view height for category overlay */
  categoryHeight() {
    let viewheight = window.innerHeight;
    let overlay = this.overlayRef.nativeElement.scrollHeight + 56;
    return viewheight - overlay;
  }


}


/** BLOG steps:

 1 - Get latest posts using <wp-collection> Component

 2 - Get more posts on scroll using trackScroll()
 * Loads more when position reach bottom - 200px
 * I would use scrollService if I decided to use parallax

 3 - Search : uses matrix params
 4 - Category : uses matrix params

 5 - "searchBoxActive" and "catBoxActive" to toggle filterBox and button classes.

 * Sets the category height tab to fill VH using categoryHeight()

 */
