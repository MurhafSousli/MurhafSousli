import {Component, Input} from '@angular/core';

@Component({
  selector: 'experience',
  template: require('./experience.html')
})

export class Experience {

  @Input() data;
}

