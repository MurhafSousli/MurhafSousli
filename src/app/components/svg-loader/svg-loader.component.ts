import {Component, Input} from '@angular/core';
import {SvgIconComponent} from './svg-icon.component';

@Component({
  selector: 'svg-loader',
  template: `
    <div [ngStyle]="defaultArgs" >
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

export class SvgLoader {

  @Input() src = '';
  @Input() fallback = '';
  @Input() args;

  defaultArgs = {
    width: '90px',
    height: '90px'
  };

  isFallback: any = false;

  constructor() {
     this.isFallback = detectIE();
  }

  ngOnInit(){
    for (var key in this.args) {
      this.defaultArgs[key] = this.args[key];
    }
  }

}
/*
    SVG component let you display inline SVG which gives you the option to modify the style of the image using css
    Inline SVG is not supporting in IE browsers including Edge,
    this component detect which browser is used and fallback to gif image if its svg is not supported
    SVG component has 3 properties:
    - "src" for SVG source file.
    - "fallback" for GIF source file.
    - "args" to override SVG style.
 */
/*
 * this function detects which browser the user are using.

 */
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
