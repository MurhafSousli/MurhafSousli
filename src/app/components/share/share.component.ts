import {Input, Component, OnInit} from '@angular/core';

@Component({
  selector: 'share',
  template: require('./share.html')
})
export class Share implements OnInit{

  /** window attributes set the height and width of share window */
  windowAttr: any;
  @Input()
  width = 500;
  @Input()
  height = 300;

  /** Share buttons container title, ex: Sharing is caring */
  @Input() shareTitle: string;

  /** Share meta tags */
  @Input() title;
  @Input() description;
  @Input() image;
  @Input() url;

  ngOnInit() {
    if (!this.url) {
      this.url = this.getMetaContent('og:url');
    }
    if (!this.title) {
      this.title = this.getMetaContent('og:title');
    }
    if (!this.description) {
      this.description = this.getMetaContent('og:description');
    }
    if (!this.image) {
      this.image = this.getMetaContent('og:image');
    }

    this.windowAttr = 'width=' + this.width + ', height=' + this.height;
  }


  shareFacebook() {
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + this.url + '&title=' + this.title, 'newwindow', this.windowAttr);
  }

  shareTwitter() {
    window.open('https://twitter.com/intent/tweet?url=' + this.url + '&text=' + this.title + '&via=MurhafSousli&image=' + this.image, 'newwindow', this.windowAttr);
  }

  shareTumblr() {
    window.open('http://www.tumblr.com/share?v=3&u=' + this.url + '&t=' + this.title, 'newwindow', this.windowAttr);
  }

  shareGooglePlus() {
    window.open('https://plus.google.com/share?url=' + this.url, 'newwindow', this.windowAttr);
  }

  shareReddit() {
    window.open('http://www.reddit.com/submit?url=' + this.url + '&title=' + this.title, 'newwindow', this.windowAttr);
  }

  shareLinkedin() {
    window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + this.url + '&title=' + this.title + '&source=' + document.domain, 'newwindow', this.windowAttr);
  }

  shareStumbleUpon() {
    window.open('http://www.stumbleupon.com/submit?url=' + this.url + '&title=' + this.title, 'newwindow', this.windowAttr);
  }

  sharePinterest() {
    window.open('https://pinterest.com/pin/create/button/?url=' + this.url + '&media=' + this.image + '&description=' + this.title, 'newwindow', this.windowAttr);
  }


  getMetaContent(property: string):string {
    let metas: any = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute("name") == property) {
        return metas[i].getAttribute("content");
      }
    }
    return "";
  }
}

/*
 TODO: add share counts feature.
 */


/*
 To display share counts

 fbCount;
 tumblrCount;
 googlePlusCount;
 linkedinCount;
 stumbleuponCount;
 pinterestCount;
 redditCount;
 getTotalShareCount() {
 }
 getFbCount() {
 var query = 'http://graph.facebook.com/?id=' + this.url;
 return this.http.get(query).map(res => res.json());
 }
 getRedditCount() {
 var query = 'http://buttons.reddit.com/button_info.json?url=%%' + this.url + '%%';
 return this.http.get(query).map(res => res.json());
 }
 getGooglePlusCount() {
 }
 getLinkedInCount() {
 var query = 'http://www.linkedin.com/countserv/count/share?url=%%' + this.url + '%%&format=json';
 return this.http.get(query).map(res => res.json());
 }
 getStumbleUpOnCount() {
 var query = 'http://www.stumbleupon.com/services/1.01/badge.getinfo?url=%%' + this.url + '%%';
 return this.http.get(query).map(res => res.json());
 }
 getPinterestCount() {
 var query = 'http://widgets.pinterest.com/v1/urls/count.json?source=6&url=%%' + this.url + '%%';
 return this.http.get(query).map(res => res.json());
 }
 */
