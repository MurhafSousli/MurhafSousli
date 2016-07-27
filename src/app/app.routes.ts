import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';

import { NoContent } from './routes/no-content';
import {Home} from './routes/home';
import {Blog} from './routes/blog';
import {Posts} from './routes/posts';
import {About} from './routes/about';
import {Resume} from './routes/resume';
import {Projects} from './routes/projects';

export const routes: RouterConfig = [
  {path: '', component: Home},
  {path: 'blog', component: Blog},
  {path: 'blog/:id', component: Blog},
  {path: 'posts/:id', component: Posts},
  {path: 'about', component: About},
  {path: 'resume', component: Resume},
  {path: 'projects', component: Projects},
  {path: '**', component: NoContent},
];


// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
