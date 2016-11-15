import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared";
import {WordPressModule} from 'ng2-wp-api';
import {NgProgressModule} from "ng2-progressbar";
import {BlogModule} from "./blog";
import {ResumeModule} from './resume';

import {StoreModule} from "@ngrx/store";
import {dataReducer} from './store/data.reducer';

import {AppComponent} from './app.component';
import {HomeComponent} from './routes/home/home.component';
import {AboutComponent} from './routes/about/about.component';
import {BlogComponent} from './routes/blog/blog.component';
import {NoContentComponent} from './routes/no-content/no-content.component';
import {SingleComponent} from './routes/single/single.component';
import {ResumeComponent} from "./routes/resume/resume.component";
import {ProjectsComponent} from './routes/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NoContentComponent,
    ResumeComponent,
    BlogComponent,
    SingleComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({data: dataReducer}),
    FormsModule,
    SharedModule,
    RoutingModule,
    WordPressModule,
    BlogModule,
    ResumeModule,
    NgProgressModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
