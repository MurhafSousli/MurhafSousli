import {Component, Input} from '@angular/core';
import {SvgIconComponent} from './svg-icon.component';

@Component({
  selector: 'svg-loader',
  template: `
    <div *ngIf="!hidden" [ngStyle]="setStyle()" >
      <svg-icon [src]="src"></svg-icon>
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
  @Input() hidden = false;
  @Input() strokeColor = '';
  @Input() fillColor = '';
  @Input() width = '48px';
  @Input() height = '48px';

  constructor() {
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
