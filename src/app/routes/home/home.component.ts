import {Component} from '@angular/core';
import {TypingCarouselDirective} from "../../directives/typing-carousel";
import {AppState} from "../../app.service";

@Component({
  selector: 'home',
  template: require('./home.html'),
  directives: [TypingCarouselDirective]
})
export class Home {

  data;

  constructor(private appState: AppState){

  }

  ngOnInit() {
    this.data = this.appState.get("data");
  }

}

/*
 *  Home component is opinionated component to display the home page
 *
 * TypingCarouselDirective is a simple typing carousel directive for angular2.
 * I use it here to display titles as it is being written
    Check it out on https://github.com/zaqqaz/ng2-typing-carousel

    another cool alternative to "ng2-typing-carousel" is rotation_words.scss
    which you has couple of animation effects and it is located in assets directory.
    'src/assets/style/vendors/_rotation_words.scss'
 */


/*
 * To use rotate.css instead of "TypingCarouselDirective" to animate text;
 *
 * Add the following to the template
 *
  <div class="rotate-title rotate-1">
    <span class="words-wrapper">
     <strong *ngFor="let title of titles let i = index" [ngClass]="getClass(i)">
        {{title}}
     </strong>
    </span>
  </div>

  =================================================
  and in the component:
  =================================================

  activeIndex = 0;

  ngOnInit(){
    setInterval(_ => {
     this.activeIndex++;
     if (this.activeIndex >= this.titles.length) {
       this.activeIndex = 0;
     }
    }, 2000);
  }

  getClass(index) {
    if (this.activeIndex == index) {
      return {'is-visible': true, 'is-hidden': false}
    }
    else {
      return {'is-visible': false, 'is-hidden': true}
    }
  }

 */
