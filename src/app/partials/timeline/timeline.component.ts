import {Component, Input} from '@angular/core';
import {TimelineItem} from './timeline-item.component';

@Component({
  selector: 'timeline',
  directives: [TimelineItem],
  template: `
    <div class="timeline-wrapper">
      
      <timeline-item *ngFor="let item of items"
        [title]="item.title"
        [content]="item.content"
        [iconClass]="item.icon"
        [date]="item.date"
        [link]="item.link">  
      </timeline-item>
    </div>
  `
})

export class Timeline {
  
  @Input() items;
  
  constructor(){
    
  }
}
