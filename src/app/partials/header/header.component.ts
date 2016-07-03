import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'header',
  template: require('./header.html')
})

export class Header{

  isActive = false;

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
