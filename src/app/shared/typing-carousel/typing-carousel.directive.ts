import {Renderer, Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[typingCarousel]',
  inputs: ['typingCarousel', 'period']
})
export class TypingCarouselDirective implements OnInit {

  loopNum: number;
  period: number;
  isDeleting: boolean;
  typingCarousel: Array<string>;

  constructor(private el: ElementRef, private renderer: Renderer) {
    this.loopNum = 0;
    this.period = 1000;
    this.isDeleting = false;
    this.typingCarousel = [];
  }

  ngOnInit() {
    this.tick('', this.typingCarousel, this.period);
  }

  tick(value: string, toRotate: Array<string>, period: number) {

    let i = this.loopNum % toRotate.length,
      fullTxt = toRotate[i],
      delta = 50;
    value = this.isDeleting ?
      fullTxt.substring(0, value.length - 1) :
      fullTxt.substring(0, value.length + 1);
    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && value === fullTxt) {
      delta = period;
      this.isDeleting = true;
    }
    else if (this.isDeleting && value === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 100;
    }
    this.renderer.setElementProperty(this.el.nativeElement, 'textContent', value);

    setTimeout(() => this.tick(value, toRotate, period), delta);
  }

}


/*
 * typing carousel directive, display the text as it's being typed.
 * more info on https://github.com/zaqqaz/ng2-typing-carousel
 */


