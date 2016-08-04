import {Pipe, PipeTransform} from '@angular/core';
import {AppState} from "../../app.service";

@Pipe({name: 'lightboxPipe'})
export class LightboxPipe implements PipeTransform {

  images;

  constructor(private appState:AppState) {

  }

  transform(value:string, el) {
    this.images = [];
    let div = document.createElement('div');
    div.innerHTML = value;

    [].forEach.call(div.getElementsByTagName("img"), (img, i) => {

      img.setAttribute('lightbox-id', i);
      this.images.push(img);

      var a = img.parentElement;
      a.removeAttribute('href');
      a.onclick = (e) => this.showLightbox(e);
    });

    el.appendChild(div);
  }

  showLightbox(e) {
    let id = e.target.getAttribute('lightbox-id');
    this.appState.set('lightbox', {selectedIndex: id, images: this.images});
  }
}
