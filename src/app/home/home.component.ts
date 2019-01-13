import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import { fadeInDown, fadeInUp } from 'ng-animate';
import { AnimationService } from '../animation.service';

@Component({
  host: {
    'class': 'app-page'
  },
  selector: 'home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  text = `Hi — my name is Murhaf, I design and build web applications.`;
  enterAnimation: TextAnimation = {
    animation: fadeInUp,
    delay: 50,
    type: 'word'
  };

  constructor(public animation: AnimationService) {
  }
}
