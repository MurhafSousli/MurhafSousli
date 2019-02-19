import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxsModule } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { NgProgressModule } from '@ngx-progressbar/core';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AuthState } from './store/auth/auth.state';
import { AdminState } from './store/admin/admin.state';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { NavModule } from './navigator/navigator.module';

import { environment } from '../environments/environment';
import { LoginComponent } from './dialog/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RoutingModule,
    FlexLayoutModule,
    NgProgressModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SimpleNotificationsModule.forRoot(),
    NgxsModule.forRoot([AuthState, AdminState], {developmentMode: !environment.production}),
    NgxsFormPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NavModule
  ],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
