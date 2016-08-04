import {Component, Input} from '@angular/core';
import {Http, Response} from '@angular/http';


@Component({
  selector: 'svg-icon',
  template: `<div [innerHTML]="iconData"></div>`
})


export class SvgIconComponent {

  private iconData: string = '';

  @Input()
  set src(src: string) {
    if (src) {
      this.http.get(src)
        .map((res: Response) => res.text())
        .subscribe(
          data => {
            this.iconData = data;
          },
          err => {
            console.error('[svg-icon component]: ' + err);
          }
        );
    }
  }


  constructor(private http: Http) {
  }
}

/*
 * This component loads the inline SVG as div, used in SVG component.
 */
