import {Component, Input} from '@angular/core';

@Component({
  selector: 'education',
  template: require('./education.html')
})

export class Education {

  @Input() data:any;
}
