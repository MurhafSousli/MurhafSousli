import {Component, Input, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {Post} from "ng2-wp-api/ng2-wp-api";
import {MetaService} from 'ng2-meta';

import {ScrollSpyService, ScrollSpyDirective} from "ng2-scrollspy";
import {ScrollSpyParallaxDirective, ScrollSpyParallaxOptions} from "ng2-scrollspy/src/plugin/parallax";

import {Disqus} from '../../components/disqus';
import {Share} from '../../components/share';
import {RelatedPosts} from "../../components/related-posts";
import {Author} from '../author';
import {LightboxPipe} from '../../components/lightbox';
import {AppState} from "../../app.service";

@Component({
  selector: 'single',
  viewProviders: [ScrollSpyService],
  template: require('./single.html'),
  directives: [ScrollSpyParallaxDirective, ScrollSpyDirective, Disqus, Share, RelatedPosts, Author],
  // pipes: [LightboxPipe]
})

export class Single implements AfterViewInit {

  post: Post;
  featuredImage: any;
  showFooter: boolean = false;
  private images:any;

  /** To append the content with lightbox */
  @ViewChild('postContent') postContent: ElementRef;

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

  @Input()
  set data(data: any) {
    this.post = new Post(data);
    this.activateLightbox(this.post.content());
    /** set meta tags */
    this.metaService.setTitle(this.post.title());
    this.metaService.setTag('og:image', this.post.featuredImageUrl('medium'));
    this.metaService.setTag('description', this.post.excerpt());
  }

  constructor(private metaService: MetaService, private scrollSpyService: ScrollSpyService, private appState: AppState) {

  }

  activateLightbox(value: string) {

    let div = document.createElement('div');
    div.innerHTML = value;
    this.images = [];
    [].forEach.call(div.getElementsByTagName("img"), (img, i) => {

      img.setAttribute('lightbox-id', i);
      this.images.push(img);
      let a = img.parentElement;
      a.removeAttribute('href');
      a.onclick = (e) => this.showLightbox(e);
    });

    this.postContent.nativeElement.appendChild(div);
  }

  showLightbox(e) {
    let id = e.target.getAttribute('lightbox-id');
    this.appState.set('lightboxImages', this.images);
    this.appState.set('lightboxIndex', id);
    this.appState.set('lightbox', true);
  }

  ngAfterViewInit() {
    setTimeout(() => {
        if (this.post.featuredMedia()) {
          this.featuredImage = this.getFeaturedImage();
          window.scrollTo(0, 0);
        }
      },
      1000
    );
    this.trackScroll();
  }

  getFeaturedImage() {
    // 1280-1024    - desktop
    if (window.matchMedia("(min-width: 768px)").matches) {
      //console.log('large - screen size: ' + window.outerWidth);
      return {
        'background-image': 'url(' + this.post.featuredImageUrl('full') + ')'
      };

    }
    //  768-480     - tablet
    if (window.matchMedia("(min-width: 480px) and (max-width: 768px)").matches) {
      //console.log('medium - screen size: ' + window.outerWidth);
      return {
        'background-image': 'url(' + this.post.featuredImageUrl('large') + ')'
      };
    }
    // 480        - phone landscape & smaller
    //console.log('small - screen size: ' + window.outerWidth);
    return {
      'background-image': 'url(' + this.post.featuredImageUrl('large') + ')'
    };

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
