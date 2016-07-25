import {Component, Input} from '@angular/core';

import {ProgressBar} from "../../../views/progressbar";

@Component({
  selector: 'skills',
  template: require('./skills.html'),
  directives: [ProgressBar]
})

export class Skills{


  @Input() data;
  progessBarArgs;

  ngAfterContentInit() {
    this.getSkills();
  }

  getSkills() {
    this.progessBarArgs = {
      color: '#022D41',
      trailColor: '#1AA6B7',  //powderblue
      strokeWidth: 4,
      trailWidth: 2,
      duration: 1200,
      easing: 'easeOutCirc',
    }

  }
}

