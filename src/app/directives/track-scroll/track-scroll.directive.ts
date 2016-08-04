import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[track-scroll]',
  outputs: ['track-scroll']
})
export class TrackScroll{

  constructor(private el:ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  track(event) {
    console.debug("Scroll Event", event);
  }

}
