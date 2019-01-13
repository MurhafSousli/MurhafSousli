import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { NavigatorComponent } from './navigator.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    LogoComponent,
    NavigatorComponent,
    MainMenuComponent,
    SocialLinksComponent
  ],
  exports: [
    NavigatorComponent
  ]
})
export class NavModule {
}
