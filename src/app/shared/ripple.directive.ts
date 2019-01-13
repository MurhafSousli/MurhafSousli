import { Directive, Inject, Input, OnInit, OnChanges, OnDestroy, Renderer2, ElementRef, NgZone, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AnimationBuilder, AnimationPlayer, style, animate } from '@angular/animations';
import { Subject, Observable, fromEvent, EMPTY } from 'rxjs';
import { switchMap, mergeMap, take, map, tap } from 'rxjs/operators';

@Directive({
  selector: '[ripple]'
})
export class RippleDirective implements OnInit, OnChanges, OnDestroy {

  @Input('rippleScale') scale = 2;
  @Input('rippleSpread') spread = false;
  @Input('rippleDisabled') disabled = false;
  @Input('rippleExitDuration') exitDuration = 300;
  @Input('rippleEnterDuration') enterDuration = 350;
  @Input('rippleColor') color = 'rgba(225,225,225, 0.2)';

  get mouseDown$(): Observable<any> {
    return fromEvent(this.el, 'mousedown').pipe(
      map((e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        return e;
      })
    );
  }

  get mouseUp$(): Observable<any> {
    return fromEvent(this.document, 'mouseup').pipe(
      take(1),
      map((e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const client = this.el.getBoundingClientRect();
        if (client.left <= e.x
          && client.right >= e.x
          && client.top <= e.y
          && client.bottom >= e.y) {
          this.el.click();
        }
        return e;
      })
    );
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  private readonly el: HTMLElement;
  private readonly worker$ = new Subject();

  constructor(
    el: ElementRef,
    private zone: NgZone,
    private renderer: Renderer2,
    private animationBuilder: AnimationBuilder,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.el = el.nativeElement;
    this.initEvents();
  }

  ngOnInit() {
    this.renderer.setStyle(this.el, 'position', 'relative');
    if (!this.spread) {
      this.renderer.setStyle(this.el, 'overflow', 'hidden');
    }
  }

  ngOnChanges() {
    this.zone.runOutsideAngular(() => {
      this.worker$.next(this.disabled);
    });
  }

  ngOnDestroy() {
    this.worker$.complete();
  }

  private initEvents() {
    this.worker$.pipe(
      switchMap((disabled: boolean) => disabled
        ? EMPTY
        : this.mouseDown$.pipe(
          mergeMap((e: any) => {
            const rippleEl = this.renderer.createElement('span');
            this.renderer.appendChild(this.el, rippleEl);
            const startPlayer = this.buildStartPlayer(rippleEl, e);
            startPlayer.play();
            let finishPlayer;
            return this.mouseUp$.pipe(
              tap(() => {
                finishPlayer = this.buildFinishPlayer(rippleEl);
                finishPlayer.play();
                finishPlayer.onDone(() => {
                  startPlayer.destroy();
                  finishPlayer.destroy();
                  this.renderer.removeChild(this.el, rippleEl);
                });
              })
            );
          })
        )
      )
    ).subscribe();
  }

  private buildStartPlayer(rippleEl: HTMLElement, e: any): AnimationPlayer {
    return this.animationBuilder.build([
      style(this.rippleStyles(e)),
      animate(this.enterDuration, style({transform: `scale(${this.scale})`}))
    ]).create(rippleEl);
  }

  private buildFinishPlayer(rippleEl: HTMLElement): AnimationPlayer {
    return this.animationBuilder.build([
      animate(`${this.exitDuration}ms ${this.enterDuration}ms`, style({opacity: 0}))
    ]).create(rippleEl);
  }

  private rippleStyles(e: any): any {
    const containerRect = this.el.getBoundingClientRect();
    const max = Math.max(this.el.offsetWidth, this.el.offsetHeight);
    const de = this.document.documentElement;
    const top = containerRect.top + de.scrollTop - de.clientTop;
    const left = containerRect.left + de.scrollLeft - de.clientLeft;
    const x = e.pageX - left - max / 2;
    const y = e.pageY - top - max / 2;

    return {
      left: x,
      top: y,
      width: max,
      height: max,
      borderRadius: '50%',
      position: 'absolute',
      transform: 'scale(0)',
      background: this.color
    };
  }
}
