import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {TypingCarouselDirective} from "./typing-carousel/typing-carousel.directive";
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {HtmlSanitizerPipe} from "./html-sanitizer/html-sanitizer.pipe";
import {HeaderComponent} from "./header/header.component";
import {GoTopComponent} from "./go-top/gotop.component";
import {NgWith} from "./ng-with/ng-with.directive";
import {ParallaxDirective} from "./parallax/parallax.directive";

@NgModule({
  declarations: [
    HeaderComponent,
    GoTopComponent,
    TypingCarouselDirective,
    ProgressBarComponent,
    HtmlSanitizerPipe,
    ParallaxDirective,
    NgWith
  ],
  exports: [
    HeaderComponent,
    GoTopComponent,
    TypingCarouselDirective,
    ProgressBarComponent,
    HtmlSanitizerPipe,
    ParallaxDirective,
    NgWith
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})

export class SharedModule {
}
