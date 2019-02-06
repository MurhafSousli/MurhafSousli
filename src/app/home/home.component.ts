import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TextAnimation } from 'ngx-teximate';
import { fadeInUp } from 'ng-animate';

import { AnimationService } from '../animation.service';
import { Info } from '../store/admin/admin.model';

@Component({
  host: {
    'class': 'app-page'
  },
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  @Select('admin.info') info$: Observable<Info>;

  enterAnimation: TextAnimation = {
    animation: fadeInUp,
    delay: 50,
    type: 'word'
  };

  constructor(public animation: AnimationService) {
  }
}
