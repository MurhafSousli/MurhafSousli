import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  done = new Subject();

  constructor() {}

  notifyOnDone() {
    this.done.next(true);
  }
}
