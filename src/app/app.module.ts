import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgProgressModule } from '@ngx-progressbar/core';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { NgxsModule } from '@ngxs/store';
import { AuthState } from './store/auth/auth.state';
import { InfoState } from './store/info/info.state';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { NavModule } from './navigator/navigator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    FlexLayoutModule,
    NgProgressModule,
    SimpleNotificationsModule.forRoot(),
    NavModule,
    NgxsModule.forRoot([AuthState, InfoState])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
