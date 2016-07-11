import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'header',
  template: require('./header.html')
})

export class Header{

  isActive = false;
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



  constructor(public router: Router){

  }
  navigate(target?: string){
    this.router.navigate([target]);
    this.isActive = false;
  }
  search(key:string) {
    this.router.navigate(['Search', {key: key}]);
    this.isActive = false;
  }
}
/*
  TODO: add social links + search feature.
 */
