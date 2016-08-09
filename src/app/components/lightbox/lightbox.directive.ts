import {Directive, ElementRef, Input,  ViewContainerRef, TemplateRef} from '@angular/core';
import {AppState} from "../../app.service";

@Directive({
  selector: '[lightbox]'
})
export class LightboxDirective {

  images: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set lightbox(value: any) {
    if(value){
      let imageArr = [];
      let div = document.createElement('div');
      div.innerHTML = value;

      [].forEach.call(div.getElementsByTagName("img"), (img, i) => {

        img.setAttribute('lightbox-id', i);
        imageArr.push(img);

        let a = img.parentElement;
        a.removeAttribute('href');
        a.onclick = (e) => this.showLightbox(e);
      });
      console.log(this.templateRef);
    }
  }

  showLightbox(e) {
    let id = e.target.getAttribute('lightbox-id');
    console.log('image #', id);
    //this.appState.set('lightboxIndex', id);
   // this.appState.set('lightbox', true);
  }
}
