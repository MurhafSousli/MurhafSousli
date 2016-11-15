/**
 * Created by Murhaf on 10/5/2016.
 */

import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared';
import {WordPressModule} from 'ng2-wp-api';

import {EducationComponent} from './education/education.component';
import {ExperienceComponent} from './experience/experience.component';
import {SkillsComponent} from './skills/skills.component';
import {WorkflowComponent} from './workflow/workflow.component';

@NgModule({
  declarations: [
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    WorkflowComponent
  ],
  exports: [
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    WorkflowComponent
  ],
  imports: [
    CommonModule,
    WordPressModule,
    SharedModule
  ]
})

export class ResumeModule {
}
