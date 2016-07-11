import {Component, Input} from '@angular/core';
import {SvgIconComponent} from './svg-icon.component';

@Component({
  selector: 'svg-loader',
  template: `
    <div [ngStyle]="setStyle()" >
      <svg-icon *ngIf="!isFallback" [src]="src"></svg-icon>
      <img *ngIf="isFallback" [src]="fallback"/>
    </div>
  `,
  styles: [`
   div{
    margin: auto;
   }
   `],
  directives: [SvgIconComponent]
})

export class Loader {

  @Input() src = '';
  @Input() fallback = '';
  @Input() strokeColor = '';
  @Input() fillColor = '';
  @Input() width = '100px';
  @Input() height = '100px';

  isFallback: any = false;

  constructor() {
     this.isFallback = detectIE();
  }

  setStyle() {
    let styles = {
      'fill': this.fillColor,
      'stroke': this.strokeColor,
      'width': this.width,
      'height': this.height,
    }
    return styles;
  }

}
//
function detectIE():any {
  let ua = window.navigator.userAgent;

  let msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  let trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  let edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}
