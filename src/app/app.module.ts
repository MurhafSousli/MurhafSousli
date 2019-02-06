import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgProgressModule } from '@ngx-progressbar/core';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { AuthState } from './store/auth/auth.state';
import { AdminState } from './store/admin/admin.state';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { NavModule } from './navigator/navigator.module';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { environment } from '../environments/environment';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SimpleNotificationsModule.forRoot(),
    NgxsModule.forRoot([AuthState, AdminState], { developmentMode: !environment.production }),
    NgxsFormPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NavModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
