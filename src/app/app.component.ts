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
  
  constructor(private store: Store, private animation: AnimationService) {
    store.subscribe(x => console.log(x));
  }

  getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  onAnimationDone() {
    this.animation.notifyOnDone();
    this.progress.complete();
  }
}
