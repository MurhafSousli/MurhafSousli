import { Component, AfterContentInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterContentInit {

  @Input() data:any;

  progessBarArgs:any;

  ngAfterContentInit() {
    this.getSkills();
  }

  getSkills() {
    this.progessBarArgs = {
      color: '#201E1E',
      trailColor: 'rgba(32, 30, 30, .2)',
      strokeWidth: 4,
      trailWidth: 2,
      duration: 1200,
      easing: 'easeOutCirc',
    }

  }

}
