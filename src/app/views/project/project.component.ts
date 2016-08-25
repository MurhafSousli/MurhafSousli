import {Component, Input, AfterViewInit} from '@angular/core';
import {ScrollSpyService, ScrollSpyDirective} from "ng2-scrollspy";
import {ScrollSpyParallaxDirective, ScrollSpyParallaxOptions} from "ng2-scrollspy/src/plugin/parallax";
import {Post} from "ng2-wp-api";
import {MetaService} from 'ng2-meta';
import {ShareButtons} from 'ng2-sharebuttons';

import {Disqus} from '../../components/disqus';


@Component({
  selector: 'project',
  viewProviders: [ScrollSpyService],
  template: require('./project.html'),
  directives: [Disqus, ShareButtons, ScrollSpyParallaxDirective, ScrollSpyDirective]
})

export class Project implements AfterViewInit{

  post:Post;
  featuredImage:any;
  parallaxOptions:ScrollSpyParallaxOptions;
  showDisqus:boolean = false;

  @Input()
  set data(data:any) {
    this.post = new Post(data);
    /** set meta tags */
    this.metaService.setTitle(this.post.title());
    this.metaService.setTag('og:image',this.post.featuredImageUrl('medium'));
    this.metaService.setTag('description',this.post.excerpt());
  }

  constructor(private scrollSpyService:ScrollSpyService, private metaService:MetaService) {
    this.parallaxOptions = {
      spyId: 'window',
      horizontal: false,
      cssKey: 'backgroundPosition',
      property: 'backgroundPositionY',
      ratio: .5,
      initValue: 0,
      unit: 'px',
      axis: 'Y'
    };
  }

  ngAfterViewInit() {
    setTimeout(() => {
        if (this.post.featuredMedia()) {
          this.featuredImage = this.getFeaturedImage();
          window.scrollTo(0, 0);
        }
        this.trackScroll();
      },
      1000
    );
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

    this.scrollSpyService.getObservable('window').subscribe((e:any) => {
      if (e.target) {
        let currPos = e.target.scrollingElement.scrollTop + window.innerHeight + 200;
        let targetPos = e.target.scrollingElement.scrollHeight;

        if (currPos >= targetPos && !this.showDisqus) {
          this.showDisqus = true;
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
