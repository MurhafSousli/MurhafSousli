import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './admin/admin.guard';

const appRoutes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  },
  { path: '404', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {
}
