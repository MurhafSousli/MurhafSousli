import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BarRatingModule } from 'ngx-bar-rating';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { RippleDirective } from './ripple.directive';
import { CoolButtonComponent } from './cool-button/cool-button.component';
import { KeysPipe } from './keys/keys.pipe';
import { SectionTitleComponent } from './section-title/section-title.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    RippleDirective,
    CoolButtonComponent,
    KeysPipe,
    SectionTitleComponent
  ],
  exports: [
    FlexLayoutModule,
    RippleDirective,
    CoolButtonComponent,
    SectionTitleComponent,
    BarRatingModule,
    NgScrollbarModule,
    FontAwesomeModule,
    KeysPipe
  ]
})
export class SharedModule {
}
