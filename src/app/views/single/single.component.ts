import {Component, Input, ElementRef} from '@angular/core';
import {Post} from "../../service/models";
import {Disqus} from '../../partials/disqus';
import {Share} from '../../partials/share';


@Component({
  selector: 'single',
  template: require('./single.html'),
  directives: [Disqus, Share]
})

export class Single {
  @Input() post:Post;
  postImageStyle;
  featuredImageLoaded = false;

  constructor(private el:ElementRef) {
  }

  ngOnInit() {
    setTimeout(_ => {
        if (this.post.featuredMedia()) {
          this.postImageStyle = this.getFeaturedImage();
          this.featuredImageLoaded = true;
          this.scrollToTop();
        }
      },
      1000
    );

  }

  scrollToTop():void {
    //this fixes navigation to reset the view position specially on firefox
    window.scrollTo(0, 0);
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
 TODO: add animations + parallax
 TODO: add post meta + share
 */


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
