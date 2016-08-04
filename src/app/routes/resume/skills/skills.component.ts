import {Component, Input, AfterContentInit} from '@angular/core';

import {ProgressBar} from "../../../components/progressbar";

@Component({
  selector: 'skills',
  template: require('./skills.html'),
  directives: [ProgressBar]
})

export class Skills implements AfterContentInit {

  @Input() data:any;

  progessBarArgs:any;

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

