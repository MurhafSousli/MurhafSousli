import {Pipe, PipeTransform} from '@angular/core';
import {WpService} from "ng2-wp-api/dist";
import {LightBoxService, LightBoxImage} from "../lightbox/lightbox.service";
/**
 * 1 - Adds click event to all images inside the given HTML
 * 2 - Gets the images of the post and prepare the lightbox service
 *
 * */
@Pipe({
  name: 'wpLightbox'
})
export class WpLightboxPipe implements PipeTransform {

  constructor(private wpService: WpService, private lightboxService: LightBoxService) {

  }

  transform(value: any, args?: any): any {
    this.getImages(args);
    return this.filterContent(value);
  }

  filterContent(content) {

    let div: HTMLElement = document.createElement('div');
    div.innerHTML = content;

    [].forEach.call(div.getElementsByTagName("img"), (img: HTMLImageElement, i) => {
      img.setAttribute('lightbox-id', i);
    });

    return div.innerHTML;
  }

  getImages(args) {
    this.wpService.collection().media().get({parent: args})
      .subscribe((res) => {
        let images = [];
        res.data.map((img)=> {
          if (img.media_type === "image") {
            images.push(new LightBoxImage(img.media_details.sizes.full.source_url, img.media_details.sizes.thumbnail.source_url));
          }
        });
        this.lightboxService.setImages(images);
      });
  }

}
