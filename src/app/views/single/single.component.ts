import {Component, Input} from '@angular/core';
import {Post} from "../../service/models";
import {Disqus} from '../../partials/disqus';
import {Share} from '../../partials/share';
import {ScrollSpyService, ScrollSpyDirective } from "ng2-scrollspy";
import {ScrollSpyParallaxDirective, ScrollSpyParallaxOptions } from "ng2-scrollspy/src/plugin/parallax";



@Component({
  selector: 'single',
  template: require('./single.html'),
  providers: [ScrollSpyService],
  directives: [Disqus, Share, ScrollSpyParallaxDirective, ScrollSpyDirective]
})

export class Single {
  @Input() post:Post;
  postImageStyle;
  featuredImageLoaded = false;

  private parallaxOptions: ScrollSpyParallaxOptions = {
    spyId: 'window',
    horizontal: false,
    cssKey: 'backgroundPosition',
    property: 'backgroundPositionY',
    ratio: -.5,
    initValue: 0,
    unit: 'px',
    axis: 'Y'
  };

  constructor() {
  }

  ngOnInit() {
    setTimeout(_ => {
        if (this.post.featuredMedia()) {
          this.postImageStyle = this.getFeaturedImage();
          this.featuredImageLoaded = true;
          window.scrollTo(0, 0);
          //this fixes navigation to reset the view position specially on firefox
        }
      },
      1000
    );

  }

  getFeaturedImage() {
    // 1280-1024    - desktop
    if (window.matchMedia("(min-width: 768px)").matches) {
      console.log('large - screen size: ' + window.outerWidth);
      return {
       'background-image': 'url(' + this.post.featuredImageUrl('full') + ')'
      };

    }
    //  768-480     - tablet
    if (window.matchMedia("(min-width: 480px) and (max-width: 768px)").matches) {
      console.log('medium - screen size: ' + window.outerWidth);
      return {
        'background-image': 'url(' + this.post.featuredImageUrl('large') + ')'
      };
    }
    // 480        - phone landscape & smaller
    console.log('small - screen size: ' + window.outerWidth);
    return {
      'background-image': 'url(' + this.post.featuredImageUrl('large') + ')'
    };


  }


  /*
   *  UI animation & functions here
   */
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
