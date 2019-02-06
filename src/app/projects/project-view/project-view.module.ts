import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectViewRoutingModule } from './project-view-routing.module';
import { ProjectViewComponent } from './project-view.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ProjectViewComponent],
  imports: [
    CommonModule,
    ProjectViewRoutingModule,
    SharedModule
  ]
})
export class ProjectViewModule { }
