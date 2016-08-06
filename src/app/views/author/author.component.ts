import {Component, Input, ElementRef, OnDestroy} from '@angular/core';
import {User} from "ng2-wp-api/classes/user/user.model";

@Component({
  selector: 'author',
  template: require('./author.html')
})

export class Author implements OnDestroy{

  private dom;
  author:User;
  avatar: string;

  @Input()
  set authors(authors:any) {
    if(authors.length){
      this.author = authors[0];
      this.avatar = authors[0].avatar_urls['96'];

      /** Check if script is already loaded */
      if(!window['twttr'] && !window['__twttr']){
        this.twitterScript();
      }
    }
  }

  constructor(el: ElementRef) {
    this.dom = el.nativeElement;
  }

  ngOnDestroy(){
    /** dispose twitter widget js */
      window['twttr'] = undefined;
      window['__twttr'] = undefined;
  }

  /** Add twitter widget js to ElementRef */
  twitterScript() {
    let script = document.createElement("script");
    script.src = '//platform.twitter.com/widgets.js';
    script.async = true;
    script.type = 'text/javascript';
    this.dom.appendChild(script);
  }


}
