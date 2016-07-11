import {Component} from '@angular/core';
import {AppState} from "../../app.service";

@Component({
  selector: 'lightbox',
  template: `
    <div class="lightbox" *ngIf="appState.lightbox">
      <ng-content></ng-content>
      <div class="close">
        <button (click)="close()" class="fa fa-close fa-2x"></button>
      </div>
    </div>
  `,
  styles: [require('./lightbox.scss')]
})

export class Lightbox {

  constructor(public appState:AppState) {
  }

  close() {
    console.log('closed');
    this.appState['lightbox'] = false;
  }
}

/*
  TODO: lightbox should be activated only on node component for displaying images
 */
