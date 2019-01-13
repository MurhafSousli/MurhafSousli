import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    MatCardModule,
    RouterModule.forChild([{ path: '', component: ProjectsComponent }])
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule {
}
