import {Pipe, PipeTransform} from '@angular/core';
import {AppState} from "../../app.service";

@Pipe({
  name: 'lightboxPipe',
 // pure: false
})
export class LightboxPipe implements PipeTransform {

  images:any;
  constructor(private appState:AppState) {

  }

  transform(value:string, el) {

    let div = document.createElement('div');
    div.innerHTML = value;

    [].forEach.call(div.getElementsByTagName("img"), (img, i) => {

      img.setAttribute('lightbox-id', i);

      let a = img.parentElement;
      a.removeAttribute('href');
      a.onclick = (e) => this.showLightbox(e);
    });

    el.appendChild(div);
  }

  showLightbox(e) {
    let id = e.target.getAttribute('lightbox-id');
    this.appState.set('lightboxIndex', id);
    this.appState.set('lightbox', true);
  }
}


/**

 filterContent(value) {
    let div = document.createElement('div');
    div.innerHTML = value;
    // console.log(value);

    [].forEach.call(div.getElementsByTagName("img"), (img, i) => {

      img.setAttribute('lightbox-id', i);

      let a = img.parentElement;
      if(a.tagName == "A"){
        console.log(a.tagName);
        a.removeAttribute('href');
        //a.onclick = (e) => this.showLightbox(e);
        a.addEventListener('click', (e) => this.showLightbox(e));
      }
      else{
        img.addEventListener('click',  (e) => this.showLightbox(e));
        //img.onclick = (e) =>this.showLightbox(e);
      }
    });
    // console.log(div.innerHTML);
    return div.innerHTML;
  }

 showLightbox(e) {
    let id = e.target.getAttribute('lightbox-id');
    console.log('image #', id);
  }

 */
