import {Component} from '@angular/core';
import {TypingCarouselDirective} from "../../directives/typing-carousel";

@Component({
  selector: 'home',
  template: require('./home.html'),
  directives: [TypingCarouselDirective]
})
export class Home {

  profilePic = '../../assets/img/angular-logo.png';
  activeIndex = 0;
  destroyed:boolean = false;
  socialLinks = [
    {
      name: 'twitter',
      link: 'https://twitter.com/MurhafSousli',
      class: 'fa fa-twitter'
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/murhafsousli',
      class: 'fa fa-linkedin'
    },
    {
      name: 'github',
      link: 'https://github.com/MurhafSousli',
      class: 'fa fa-github-alt'
    },
    {
      name: 'stackoverflow',
      link: 'https://stackoverflow.com/users/1015648/murhaf-sousli',
      class: 'fa fa-stack-overflow'
    },
    {
      name: 'mail',
      link: 'mailto:murhafsousli@gmail.com',
      class: 'fa fa-envelope'
    }
  ];

  titles = [
    'Web developer',
    'Software Engineer',
    'Blogger'
  ];

  ngOnInit() {
    // setInterval(_ => {
    //
    //   this.activeIndex++;
    //   if (this.activeIndex >= this.titles.length) {
    //     this.activeIndex = 0;
    //   }
    // }, 2000);
  }

  getClass(index) {
    if (this.activeIndex == index) {
      return {'is-visible': true, 'is-hidden': false}
    }
    else {
      return {'is-visible': false, 'is-hidden': true}
    }
  }

}
