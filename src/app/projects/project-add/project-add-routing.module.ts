import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectAddComponent } from './project-add.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectAddRoutingModule { }
