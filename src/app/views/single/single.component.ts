import {Component, Input} from '@angular/core';
import {Post} from "../../service/models";
import {Disqus} from '../../partials/disqus';


@Component({
  selector: 'single',
  template: require('./single.html'),
  //styles: [require('./single.scss')],
  directives: [Disqus]
})

export class Single {
  @Input() post:Post;
  postImageStyle;

  constructor() {
  }

  ngOnInit() {
    this.postImageStyle = this.getFeaturedImage();
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
