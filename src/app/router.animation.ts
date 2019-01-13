import { trigger, animate, transition, style, query, keyframes, group } from '@angular/animations';

export const sideAnimation = trigger('sideAnimation', [

  transition('* => *', [

    query(':enter', [
        style({
          opacity: 1,
          transform: 'translate3d(200%, 0, -500px)'
        })
      ],
      {optional: true}
    ),
    group([
      query(':leave', [
          animate('1500ms ease-in-out', keyframes([
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, -500px)', offset: 0.25}),
            style({opacity: 1, transform: 'translate3d(-200%, 0, -500px)', offset: 1.0})
          ]))
        ],
        {optional: true}
      ),
      query(':enter', [
          animate('1500ms ease-in-out', keyframes([
            style({opacity: 1, transform: 'translate3d(200%, 0, -500px)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(200%, 0, -500px)', offset: 0.25}),
            style({opacity: 1, transform: 'translate3d(0, 0, -500px)', offset: 0.95}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1.0})
          ]))
        ],
        {optional: true}
      )
    ]),
  ])

]);
