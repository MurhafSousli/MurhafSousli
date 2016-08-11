import {Component, OnInit} from '@angular/core';
import {AppState} from "../../app.service";
import {Carousel} from '../carousel';

@Component({
  selector: 'lightbox',
  template: require('./lightbox.html'),
  directives: [Carousel]
})

export class Lightbox implements OnInit{

  flickityOptions: any;
  images:any;

  constructor(public appState: AppState) {
  }

  ngOnInit() {
    let lightboxImages = this.appState.get('lightboxImages');
    if(lightboxImages && lightboxImages.length > 0){
      this.images = lightboxImages;
      let index = +this.appState.get('lightboxIndex');

      this.flickityOptions = {
        initialIndex: index,
        setGallerySize: false
      }
    }
    else{
      console.error("[lightbox]: images data is invalid!");
    }
  }

  close() {
    this.appState.set('lightbox', false);
  }
}

