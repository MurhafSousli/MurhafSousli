import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectEditRoutingModule } from './project-edit-routing.module';
import { ProjectEditComponent } from './project-edit.component';
import { SharedModule } from '../../shared/shared.module';
import { ProjectFormModule } from '../project-form/project-form.module';

@NgModule({
  declarations: [
    ProjectEditComponent
  ],
  imports: [
    CommonModule,
    ProjectEditRoutingModule,
    ProjectFormModule,
    SharedModule
  ]
})
export class ProjectEditModule {
}
