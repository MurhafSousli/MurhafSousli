import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons/faCodeBranch';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
import { faStar } from '@fortawesome/free-regular-svg-icons/faStar';
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

const icons = [
  faTwitter,
  faGithub,
  faLinkedinIn,
  faEnvelope,
  faCode,
  faHome,
  faStar,
  faCodeBranch,
  faHashtag,
  faUserTie,
  faArrowRight,
  faTimes,
  faTrash,
  faPlus
];
library.add(...icons);
