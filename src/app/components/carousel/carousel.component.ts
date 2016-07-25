import { Component, Input, ElementRef } from '@angular/core';

// for usage info check flickity carousel http://flickity.metafizzy.co/
var Flickity = require('flickity');

@Component({
  selector: 'carousel',
  template: `<ng-content></ng-content>`
})
export class Carousel {

  @Input() options;
  carousel: any;
  defaultOptions: any = {
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false
  };

  constructor(private el: ElementRef) {}

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


/*
 * Carousel Component for flickity carousel, for more info visit http://flickity.metafizzy.co/

 */
