import {Component, OnInit} from '@angular/core';
import {AppState} from "../../app.service";
import {Carousel} from '../carousel';

@Component({
  selector: 'lightbox',
  template: require('./lightbox.html'),
  directives: [Carousel]
})

export class Lightbox implements OnInit {

  flickityOptions:any;
  images;

  constructor(public appState:AppState) {
  }

  ngOnInit() {
    let lightboxArgs = this.appState.get('lightbox');
    if (lightboxArgs) {
      this.images = lightboxArgs.images;
      /** let Flickity Carousel slider to display images[selectedIndex] */
      this.flickityOptions = {
        initialIndex: lightboxArgs.selectedIndex,
        setGallerySize: false
      }
    }
  }

  close() {
    this.appState.set('lightbox', false);
  }
}
