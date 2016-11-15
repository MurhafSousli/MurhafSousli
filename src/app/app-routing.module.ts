import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from "./routes/about/about.component";
import {HomeComponent} from "./routes/home/home.component";
import {BlogComponent} from "./routes/blog/blog.component";
import {NoContentComponent} from "./routes/no-content/no-content.component";
import {ResumeComponent} from "./routes/resume/resume.component";
import {SingleComponent} from "./routes/single/single.component";
import {ProjectsComponent} from "./routes/projects/projects.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:id', component: SingleComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: SingleComponent},
  {path: 'resume', component: ResumeComponent},
  {path: '**', component: NoContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
