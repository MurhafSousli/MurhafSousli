import {Component, ViewChild, ElementRef, Renderer, Input, ChangeDetectionStrategy} from '@angular/core';
import {WpPost, WpService} from "ng2-wp-api";
import {HostListener} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SinglePostComponent {

  post;
  showComments;
  @ViewChild('fImage') fImage: ElementRef;

  @Input()
  set data(data) {
    this.post = new WpPost(data);

    if (this.post.featuredMedia()) {
      this.setFeaturedImage(this.post);
    }
  };

  constructor(private renderer: Renderer, private _wpService: WpService) {
  }

  setFeaturedImage(post) {
    this.renderer.setElementStyle(this.fImage.nativeElement, 'height', window.innerHeight / 2+ 'px');

    if (window.matchMedia("(min-width: 768px)").matches) {
      // 1280-1024    - desktop
      this.renderer.setElementStyle(this.fImage.nativeElement, 'background-image', 'url(' + post.featuredImageUrl('full') + ')');
    }
    else {
      //  768-480     - tablet
      this.renderer.setElementStyle(this.fImage.nativeElement, 'background-image', 'url(' + post.featuredImageUrl('large') + ')');
    }

    // else if (window.matchMedia("(min-width: 480px) and (max-width: 768px)").matches) {
    // else {
    //   //  <480 - mobile
    //   this.renderer.setElementStyle(this.fImage.nativeElement, 'background-image', 'url(' + post.featuredImageUrl('large') + ')');
    // }
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
      if (currPos >= targetPos && !this._wpService.config.loading.getValue()) {
        this.showComments = true;
      }
    }

  }
}
