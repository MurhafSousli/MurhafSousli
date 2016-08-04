import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';

import {NoContent} from './routes/no-content';
import {Home} from './routes/home';
import {Blog} from './routes/blog';
import {SinglePost} from './routes/single-post';
import {About} from './routes/about';
import {Resume} from './routes/resume';
import {Projects} from './routes/projects';
import {SingleProject} from "./routes/single-project";

import { DataResolver } from './app.resolver';

export const routes: RouterConfig = [
  {
    path: '',
    component: Home,
    data:{
      meta:{
        title: 'Murhaf Sousli | Home',
        description: 'This is my portfolio and blog.'
      }
    }
  },
  {
    path: 'blog',
    component: Blog,
    data: {
      meta: {
        title: 'Murhaf Sousli | Blog',
        description: 'This is my blog page, I will be blogging about everything and mostly web development and design :D'
      }
    }
  },
  {
    path: 'blog/:id',
    component: Blog,
    data: {
      meta: {
        title: 'Murhaf Sousli | Blog',
        description: 'I blog about web, mostly angular 2'
      }
    }
  },
  {
    path: 'posts/:id',
    component: SinglePost
  },
  {
    path: 'about',
    component: About,
    data: {
      meta: {
        title: 'Murhaf Sousli | About',
        description: 'About Murhaf Sousli'
      }
    }
  },
  {
    path: 'resume', component: Resume, data: {
    meta: {
      title: 'Murhaf Sousli | Resume',
      description: ''
    }
  }
  },
  {
    path: 'projects', component: Projects, data: {
    meta: {
      title: 'Murhaf Sousli | Projects',
      description: 'Project of the home page'
    }
  }
  },
  {
    path: 'projects/:id', component: SingleProject, data: {
    meta: {
      title: 'Murhaf Sousli | Projects',
      description: 'Project of the home page'
    }
  }
  },
  {
    path: '**',
    component: NoContent
  }
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  // 'About': require('es6-promise-loader!./about'),
  // 'Detail': require('es6-promise-loader!./+detail'),
  // 'Index': require('es6-promise-loader!./+detail'), // must be exported with detail/index.ts
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  // asyncRoutes['About'],
  // asyncRoutes['Detail'],
   // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
