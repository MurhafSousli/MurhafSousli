import {Component, ComponentRef, OnInit} from '@angular/core';
import {Carousel} from '../carousel';

@Component({
  selector: 'lightbox',
  template: require('./lightbox.html'),
  directives: [Carousel]
})

export class Lightbox implements OnInit{

  flickityOptions: any;
  public images:any;
  public index: number;
  public cmpRef: ComponentRef<Lightbox>;

  ngOnInit(){
    if(this.images && this.images.length > 0){
      this.flickityOptions = {
        initialIndex: this.index,
        setGallerySize: false
      }
    }
    else{
      console.error("[lightbox]: images data is invalid!");
      this.close();
    }
  }

  close() {
    this.cmpRef.destroy();
  }
}

