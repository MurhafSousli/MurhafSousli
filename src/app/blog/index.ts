import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared';
import {WordPressModule} from 'ng2-wp-api';
import {ShareButtonsModule} from "ng2-sharebuttons";
import {DisqusModule} from "ng2-awesome-disqus";

import {CategoriesComponent} from "./categories/categories.component";
import {CardComponent} from './card/card.component';
import {SinglePostComponent} from './single-post/single-post.component';
import {AuthorComponent} from "./author/author.component";
import {ProjectsComponent} from './projects/projects.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    CardComponent,
    SinglePostComponent,
    AuthorComponent,
    ProjectsComponent
  ],
  exports: [
    CategoriesComponent,
    CardComponent,
    SinglePostComponent,
    AuthorComponent,
    ProjectsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    WordPressModule,
    SharedModule,
    ShareButtonsModule,
    DisqusModule
  ]
})

export class BlogModule {
}
