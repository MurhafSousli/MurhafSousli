import {Component} from '@angular/core';
import {Skill} from "./skill.model";
import {ProgressBar} from "../../partials/progressbar";

@Component({
  selector: 'skills',
  template: require('./skills.html'),
  styles: [require('./skills.scss')],
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
      color: '#FF6666',
      strokeWidth: 4,
      trailWidth: 2,
      easing: 'easeInOut'
    }

    this.skills = new Array<Skill>();
    this.skills.push(new Skill('C#', 90, 'circle'));
    this.skills.push(new Skill('C++', 70, 'circle'));
    this.skills.push(new Skill('Javascript', 85, 'circle'));
    this.skills.push(new Skill('Typescript', 95, 'circle'));
    this.skills.push(new Skill('Angular2', 90, 'circle'));
    this.skills.push(new Skill('Java', 80, 'circle'));
    this.skills.push(new Skill('ASP.Net', 90, 'circle'));
    this.skills.push(new Skill('HTML5', 90, 'semi-circle'));
    this.skills.push(new Skill('CSS3', 90, 'semi-circle'));
  }
}
