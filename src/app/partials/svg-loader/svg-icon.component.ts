import {Component, Input} from '@angular/core';
import {Http, Response} from '@angular/http';


@Component({
  selector: 'svg-icon',
  template: `<div [innerHTML]="iconData"></div>`
})


export class SvgIconComponent {
  @Input() src:string;

  private iconData:string = '';

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.loadSvg();
  }

  loadSvg() {
    this.http.get( this.src )
      .map( (res: Response) => res.text() )
      .subscribe(
        data => { this.iconData = data; },
        err => { console.error(err); }
      );
  }

}
