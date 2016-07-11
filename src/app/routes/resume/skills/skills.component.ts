import {Component} from '@angular/core';
import {Skill} from "./skill.model";
import {ProgressBar} from "../../../views/progressbar";

@Component({
  selector: 'skills',
  template: require('./skills.html'),
  directives: [ProgressBar]
})

export class Skills{


  skills;
  progessBarArgs;

  ngAfterContentInit() {
    this.setSkills();
  }

  setSkills() {
    this.progessBarArgs = {
      color: '#0e2231',
      trailColor: 'powderblue',
      strokeWidth: 4,
      trailWidth: 2,
      duration: 1200,
      easing: 'easeOutCirc',
    }

    this.skills = new Array<Skill>();
    this.skills.push(new Skill('C#', 90, 'circle'));
    this.skills.push(new Skill('C++', 70, 'circle'));
    this.skills.push(new Skill('Javascript', 85, 'circle'));
    this.skills.push(new Skill('Typescript', 95, 'circle'));
    this.skills.push(new Skill('Angular2', 90, 'circle'));
    this.skills.push(new Skill('Node', 60, 'circle'));
    this.skills.push(new Skill('ASP.Net', 90, 'circle'));
    this.skills.push(new Skill('HTML5', 95, 'circle'));
    this.skills.push(new Skill('CSS3', 95, 'circle'));
  }
}

