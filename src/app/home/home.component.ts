import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'home',
  template: require('./home.html')
})
export class Home implements OnDestroy{

  profilePic = '../../assets/img/angular-logo.png';
  activeIndex = 0;
  destroyed: boolean = false;

  titles = [
    'Web developer',
    'Software Engineer',
    'Blogger'
  ];

  ngOnInit() {
    setInterval(_ => {

      this.activeIndex++;
      if (this.activeIndex >= this.titles.length) {
        this.activeIndex = 0;
      }
    }, 2000);
  }

  getClass(index) {
    if(this.activeIndex == index) {
      return {'is-visible': true, 'is-hidden': false}
    }
    else {
      return {'is-visible': false, 'is-hidden': true}
    }
  }

  ngOnDestroy() {
    this.destroyed = true;
    setTimeout(_=> {

    }, 2000);
  }
}
