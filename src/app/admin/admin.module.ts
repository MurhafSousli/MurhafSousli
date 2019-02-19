import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgxsFormPluginModule,
    RouterModule.forChild([
      {path: '', component: AdminComponent}
    ])
  ]
})
export class AdminModule { }
