import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';

import { ProjectListComponent } from './project-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    MatCardModule,
    RouterModule.forChild([{ path: '', component: ProjectListComponent }])
  ],
  declarations: [
    ProjectListComponent
  ]
})
export class ProjectListModule {
}
