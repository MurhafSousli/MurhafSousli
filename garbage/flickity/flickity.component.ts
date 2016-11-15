import {Component, AfterViewInit, ElementRef, Input, ChangeDetectionStrategy} from '@angular/core';
// for usage info check flickity carousel http://flickity.metafizzy.co/
const Flickity = require('flickity');

@Component({
  selector: 'carousel',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlickityComponent implements AfterViewInit {

  @Input() options:any;
  carousel:any;

  defaultOptions:any = {};

  constructor(private el:ElementRef) {
    if(!Flickity){
      console.error("Flickity is not loaded");
    }
  }

  ngAfterViewInit() {
    for (var key in this.options) {
      this.defaultOptions[key] = this.options[key];
    }

    this.carousel = new Flickity(this.el.nativeElement, this.defaultOptions);
  }

  ngOnDestroy() {
    this.carousel.destroy();
    this.carousel = null;
  }
}
