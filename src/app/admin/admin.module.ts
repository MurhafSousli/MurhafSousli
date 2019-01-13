import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppDialog } from '../dialog/dialog.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: AdminComponent}
    ]),
  ],
  providers: [
    AppDialog
  ]
})
export class AdminModule { }
