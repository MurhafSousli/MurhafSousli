import {Component, HostListener, Input, Renderer} from '@angular/core';

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
  /** show button when top = factor * view height */
  @Input()
  factor: number = 2.5;

  /** Track page scroll */
  @HostListener('window:scroll', ['$event'])
  trackScroll(e) {
    /** Show button when user scroll factor x 100vh */
    let firePos = window.innerHeight * this.factor;
    let scrollPos = e.target.scrollingElement.scrollTop + window.innerHeight;
    this.isActive = (scrollPos > firePos);
  }

  constructor(private renderer:Renderer){
  }

  scrollTop(duration) {
    if (duration <= 0) return;
    var difference = -getScrollTop();
    var perTick = difference / duration * 10;

    setTimeout(() => {
      this.renderer.invokeElementMethod(window, 'scrollTo', [0, getScrollTop() + perTick])
      if (getScrollTop() == 0) return;
      this.scrollTop(duration - 10);
    }, 10);

  }

}

var getScrollTop = () => {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
