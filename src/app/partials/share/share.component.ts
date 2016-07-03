import { Input, Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'share',
  template: require('./share.html')
})
export class Share {

  Title = document.title;
  Url = document.URL;
  Domain = document.domain;
  windowAttr;
  @Input()
  featuredImage;
  @Input()
  width = 500;
  @Input()
  height = 300;
  @Input()
  shareText;

  constructor(private http: Http) {
    this.windowAttr = 'width=' + this.width + ', height=' + this.height;
  }
  shareFacebook() {
    window.open('http://www.facebook.com/share.php?u=' + this.Url + '&title=' + this.Title, 'newwindow', this.windowAttr);
  }
  shareTumblr() {
    window.open('http://www.tumblr.com/share?v=3&u=' + this.Url + '&t=' + this.Title, 'newwindow', this.windowAttr);
  }
  shareGooglePlus() {
    window.open('https://plus.google.com/share?url=' + this.Url, 'newwindow', this.windowAttr);
  }
  shareTwitter() {
    window.open('http://twitter.com/home?status=' + this.Title + '+' + this.Url, 'newwindow', this.windowAttr);
  }
  shareReddit() {
    window.open('http://www.reddit.com/submit?url=' + this.Url + '&title=' + this.Title, 'newwindow', this.windowAttr);
  }
  shareLinkedin() {
    window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + this.Url + '&title=' + this.Title + '&source=' + this.Domain, 'newwindow', this.windowAttr);
  }
  shareStumbleUpon() {
    window.open('http://www.stumbleupon.com/submit?url=' + this.Url + '&title=' + this.Title, 'newwindow', this.windowAttr);
  }
  sharePinterest() {
    window.open('https://pinterest.com/pin/create/button/?url=' + this.Url + '&media=' + this.featuredImage + '&description=' + this.Title, 'newwindow', this.windowAttr);
  }
}

/*
 when I wanted share counts
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
 var query = 'http://graph.facebook.com/?id=' + this.Url;
 return this.http.get(query).map(res => res.json());
 }
 getRedditCount() {
 var query = 'http://buttons.reddit.com/button_info.json?url=%%' + this.Url + '%%';
 return this.http.get(query).map(res => res.json());
 }
 getGooglePlusCount() {
 }
 getLinkedInCount() {
 var query = 'http://www.linkedin.com/countserv/count/share?url=%%' + this.Url + '%%&format=json';
 return this.http.get(query).map(res => res.json());
 }
 getStumbleUpOnCount() {
 var query = 'http://www.stumbleupon.com/services/1.01/badge.getinfo?url=%%' + this.Url + '%%';
 return this.http.get(query).map(res => res.json());
 }
 getPinterestCount() {
 var query = 'http://widgets.pinterest.com/v1/urls/count.json?source=6&url=%%' + this.Url + '%%';
 return this.http.get(query).map(res => res.json());
 }
 */
