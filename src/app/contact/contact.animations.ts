import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const slideMapAnimation = trigger('slideMap', [
  state('in', style({ transform: 'translateX(0)' })),
  transition(':enter', [
    animate(
      '1.5s ease',
      keyframes([
        style({ transform: 'translate3d(100%, 0 ,0)', offset: 0 }),
        style({ transform: 'translate3d(100%, 0 ,0)', offset: 0.4 }),
        style({ transform: 'translate3d(-5%, 0 ,0)', offset: 0.9 }),
        style({ transform: 'translate3d(0, 0 ,0)', offset: 1.0 })
      ])
    )
  ])
]);
