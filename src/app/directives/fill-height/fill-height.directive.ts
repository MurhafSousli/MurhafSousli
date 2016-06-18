
import {Directive, ElementRef} from '@angular/core';
@Directive({
  selector: '[fillheight]'
})
export class FillHeight {
  constructor(private el: ElementRef) {
  }
  ngAfterViewChecked(){
    this.el.nativeElement.style.height = (window.innerHeight - this.el.nativeElement.offsetTop) + 'px' ;
  }
}
