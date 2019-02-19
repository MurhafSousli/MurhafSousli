import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { RippleDirective } from './ripple.directive';
import { CoolButtonComponent } from './cool-button/cool-button.component';
import { KeysPipe } from './keys/keys.pipe';
import { SectionTitleComponent } from './section-title/section-title.component';
import { CoolButtonModule } from './cool-button/cool-button.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    SectionTitleComponent,
    RippleDirective,
    KeysPipe,
  ],
  exports: [
    FlexLayoutModule,
    CoolButtonModule,
    NgScrollbarModule,
    FontAwesomeModule,
    SectionTitleComponent,
    RippleDirective,
    KeysPipe
  ]
})
export class SharedModule {
}
