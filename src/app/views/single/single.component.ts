import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer,
  ComponentResolver,
  Type,
  ViewContainerRef,
  ComponentRef,
  ComponentFactory,
} from '@angular/core';
import {Post} from "ng2-wp-api/ng2-wp-api";
import {MetaService} from 'ng2-meta';

import {ScrollSpyService, ScrollSpyDirective} from "ng2-scrollspy";
import {ScrollSpyParallaxDirective, ScrollSpyParallaxOptions} from "ng2-scrollspy/src/plugin/parallax";

import {Disqus} from '../../components/disqus';
import {ShareButtons} from '../../components/share';
import {RelatedPosts} from "../../components/related-posts";
import {Author} from '../author';
import {Lightbox} from "../../components/lightbox/lightbox.component";

@Component({
  selector: 'single',
  viewProviders: [ScrollSpyService],
  template: require('./single.html'),
  directives: [ScrollSpyParallaxDirective, ScrollSpyDirective, Disqus, ShareButtons, RelatedPosts, Author]
})

export class Single implements AfterViewInit {

  post: Post;
  showFooter: boolean = false;
  featuredMedia: boolean = false;
  private lightboxImages: any;

  @ViewChild('overlay') overlay: ElementRef;
  @ViewChild('postContent') postContent: ElementRef;

  lightboxCmpRef:ComponentRef<any>;

  @Input()
  set data(data: any) {
    this.post = new Post(data);
    this.setFeaturedImage();
    this.activateLightbox(this.post.content());
    /** set meta tags */
    this.metaService.setTitle(this.post.title());
    this.metaService.setTag('description', this.post.excerpt());
    this.metaService.setTag('og:image', this.post.featuredImageUrl('full'));
  }

  private parallaxOptions: ScrollSpyParallaxOptions = {
    spyId: 'window',
    horizontal: false,
    cssKey: 'backgroundPosition',
    property: 'backgroundPositionY:center',
    ratio: .5,
    initValue: 0,
    unit: 'px',
    axis: 'Y'
  };

  constructor(private metaService: MetaService,
              private scrollSpyService: ScrollSpyService,
              private viewContainerRef:ViewContainerRef,
              private resolver:ComponentResolver,
              private renderer: Renderer) {

  }

  ngAfterViewInit() {
    this.trackScroll();
  }

  setFeaturedImage() {
    setTimeout(()=> {
      if (this.post.featuredMedia() > 0)
        this.featuredMedia = true;
    }, 1000);

    if (window.matchMedia("(min-width: 768px)").matches) {
      // 1280-1024    - desktop
      this.renderer.setElementStyle(this.overlay.nativeElement, 'background-image', 'url(' + this.post.featuredImageUrl('full') + ')');
    }
    else if (window.matchMedia("(min-width: 480px) and (max-width: 768px)").matches) {
      //  768-480     - tablet
      this.renderer.setElementStyle(this.overlay.nativeElement, 'background-image', 'url(' + this.post.featuredImageUrl('large') + ')');
    }
    else {
      //  <480 - mobile
      this.renderer.setElementStyle(this.overlay.nativeElement, 'background-image', 'url(' + this.post.featuredImageUrl('large') + ')');
    }
  }

  /** Track page scroll */
  trackScroll() {

    this.scrollSpyService.getObservable('window').subscribe((e: any) => {
      if (e.target) {
        /** currPos = userScrollingPos + 100hv + 200px */
        let currPos = e.target.scrollingElement.scrollTop + window.innerHeight + 200;
        let targetPos = e.target.scrollingElement.scrollHeight;

        if (currPos >= targetPos && !this.showFooter) {
          this.showFooter = true;
        }
      }
    });
  }

  activateLightbox(value: string) {
    /** 1.Create div element from value param.
     *  2.Filter img tags [change onClick to open the lightbox instead].
     *  3.Add img to images list [send images to lightbox component].
     *  4.Append the filtered element to post content using renderer.
     */
    this.lightboxImages = [];

    let div = this.renderer.createElement(this.postContent.nativeElement, 'div');
    div.innerHTML = value;
    [].forEach.call(div.getElementsByTagName("img"), (img, i) => {

      img.setAttribute('lightbox-id', i);
      let a = img.parentElement;
      a.removeAttribute('href');
      a.onclick = (e) => this.showLightbox(e);
      this.lightboxImages.push(img);
    });
  }

  showLightbox(e) {
    let id = e.target.getAttribute('lightbox-id');

    this.resolver.resolveComponent(<Type>Lightbox).then((factory:ComponentFactory<any>) => {
      this.lightboxCmpRef = this.viewContainerRef.createComponent(factory);
      this.lightboxCmpRef.instance.images = this.lightboxImages;
      this.lightboxCmpRef.instance.index = id;
      this.lightboxCmpRef.instance.cmpRef = this.lightboxCmpRef;
    });
  }

  ngOnDestroy() {
    if (this.lightboxCmpRef) {
      this.lightboxCmpRef.destroy();
    }
  }
}


/*
 ------------------------------------------
 Responsive Grid Media Queries - 1280, 1024, 768, 480
 1280-1024   - desktop (default grid)
 1024-768    - tablet landscape
 768-480     - tablet
 480-less    - phone landscape & smaller
 --------------------------------------------
 @media all and (min-width: 1024px) and (max-width: 1280px) { }

 @media all and (min-width: 768px) and (max-width: 1024px) { }

 @media all and (min-width: 480px) and (max-width: 768px) { }

 @media all and (max-width: 480px) { }
 */
