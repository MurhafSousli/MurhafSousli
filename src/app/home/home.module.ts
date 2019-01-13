import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeximateModule } from 'ngx-teximate';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ]),
    TeximateModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
