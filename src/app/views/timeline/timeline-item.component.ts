import {Component, Input} from '@angular/core';

@Component({
  selector: 'timeline-item',
  template: `
    <div class="timeline-content">
      <h4>{{title}}</h4>
      <p [innerHtml]="content">
      </p>
    </div>
    <div class="timeline-img">
      <i [class]="iconClass"></i>
    </div>
    
    <div class="timeline-date">  
      <span>{{date}}</span>
    </div>
    <!--<a [href]="link"></a>-->
  `
})

export class TimelineItem {
  @Input() date;
  @Input() content;
  @Input() iconClass;
  @Input() title;
  @Input() link;

  constructor() {

  }
}
/*
  TODO: decide to finish timeline or to let it go.
 */
