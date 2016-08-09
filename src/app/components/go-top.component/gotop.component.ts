import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'go-top',
  template: `
  <div *ngIf="isActive" class="top-button">
      <a (click)="scrollTop(duration)"><i class="fa fa-arrow-circle-up fa-3x" aria-hidden="true"></i> <p>Top</p></a>
  </div>
  `
})

export class GoTop {

  isActive: boolean = false;
  /** scroll to top duration in ms (default: 600ms) */
  @Input()
  duration: number = 600;

  /** Track page scroll */
  @HostListener('window:scroll', ['$event'])
  trackScroll(e) {
    /** Show button when user scroll 2 x 100vh */
    let firePos = window.innerHeight * 2.5;
    let scrollPos = e.target.scrollingElement.scrollTop + window.innerHeight;
    this.isActive = (scrollPos > firePos);
  }

  scrollTop(duration) {
    scrollToTop(duration);
  }

}

var scrollToTop = (duration): void => {
  if (duration <= 0) return;
  var difference = -document.body.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function () {
    document.body.scrollTop = document.body.scrollTop + perTick;
    if (document.body.scrollTop == 0) return;
    scrollToTop(duration - 10);
  }, 10);
}
