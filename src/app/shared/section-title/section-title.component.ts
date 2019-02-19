import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-title',
  template: `
    <div class="section-title px-5">
      <div class="container">
        <fa-icon [icon]="['fas', 'hashtag']" [fixedWidth]="true"></fa-icon>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
