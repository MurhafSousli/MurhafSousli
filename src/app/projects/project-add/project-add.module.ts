import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectAddRoutingModule } from './project-add-routing.module';
import { ProjectAddComponent } from './project-add.component';
import { SharedModule } from '../../shared/shared.module';
import { ProjectFormModule } from '../project-form/project-form.module';

@NgModule({
  declarations: [ProjectAddComponent],
  imports: [
    CommonModule,
    ProjectAddRoutingModule,
    ProjectFormModule,
    SharedModule
  ]
})
export class ProjectAddModule { }
