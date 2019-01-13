import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'navigator',
  templateUrl: './navigator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class NavigatorComponent {

  mobileMenu = false;
}
