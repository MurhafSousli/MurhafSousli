import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './project-list/project-list.module#ProjectListModule'
  },
  {
    path: 'view',
    loadChildren: './project-view/project-view.module#ProjectViewModule'
  },
  {
    path: 'add',
    loadChildren: './project-add/project-add.module#ProjectAddModule'
  },
  {
    path: 'edit',
    loadChildren: './project-edit/project-edit.module#ProjectEditModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
