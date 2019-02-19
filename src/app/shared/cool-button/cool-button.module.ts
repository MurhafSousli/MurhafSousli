import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoolButtonComponent } from './cool-button.component';
import { CoolButtonContentComponent } from './cool-button-content/cool-button-content.component';

@NgModule({
  declarations: [
    CoolButtonComponent,
    CoolButtonContentComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CoolButtonComponent
  ]
})
export class CoolButtonModule {
}
