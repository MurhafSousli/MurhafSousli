import { ChangeDetectionStrategy, Component, HostBinding, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  animations: [
    trigger('slideDialog', [
      state('in', style({transform: 'translateY(0%) scale(1)', opacity: 1})),
      transition(':enter', [
        style({transform: 'translateY(25%) scale(0.9)', opacity: 0}),
        animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
      ]),
      transition(':leave', [
        animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          style({transform: 'translateY(25%)', opacity: 0})
        )
      ]),
    ])
  ],
  template: `
    <div class="dialog">
      <h1>Thanks</h1>
      <p>Your message was sent! you should expect a response in the next 48 hours.</p>
      <cool-button (click)="overlayRef.detach()">Ok</cool-button>
    </div>
  `
})
export class DialogComponent {
  overlayRef: OverlayRef;

  @HostBinding('@slideDialog') slideAnimation;

  @HostListener('@slideDialog.done', ['$event']) onMouseLeave(e) {
    if (e.toState === 'void') {
      this.overlayRef.dispose();
    }
  }
}
