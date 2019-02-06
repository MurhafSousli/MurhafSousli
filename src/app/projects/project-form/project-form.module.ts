import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

import { ProjectFormComponent } from './project-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjectFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuillModule
  ],
  exports: [
    ProjectFormComponent
  ]
})
export class ProjectFormModule {
}
