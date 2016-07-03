import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';

import { NoContent } from './no-content';
import {Home} from './home';
import {Blog} from './blog';
import {Node} from './node';
import {About} from './about';
import {Resume} from './resume';
import {Category} from './category';
import {Search} from './search';

export const routes: RouterConfig = [
  { path: '',      component: Home },
  {path: 'blog',  component: Blog},
  {path: 'node/:id', component: Node},
  {path: 'search/:key', component: Search},
  {path: 'category/:id', component: Category},
  {path: 'about', component: About},
  {path: 'resume', component: Resume},
  { path: '**',    component: NoContent },
];

