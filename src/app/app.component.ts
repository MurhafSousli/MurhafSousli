import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { NgProgressComponent } from '@ngx-progressbar/core';
import { sideAnimation } from './router.animation';
import { AnimationService } from './animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [sideAnimation]
})
export class AppComponent {

  loaded = of(false).pipe(
    delay(200),
    map(() => true)
  );

  @ViewChild(NgProgressComponent) progress: NgProgressComponent;

  constructor(private _store: Store, private _animation: AnimationService) {
  }

  getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  onAnimationDone() {
    this._animation.notifyOnDone();
    this.progress.complete();
  }
}
