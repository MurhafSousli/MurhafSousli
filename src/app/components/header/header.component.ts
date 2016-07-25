import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'header',
  template: require('./header.html')
})

export class Header{

  isActive = false;
  @Input() data;

  constructor(public router: Router){
  }

  navigate(target?: string){
    this.router.navigate([target]);
    this.isActive = false;
  }
}

/*
 * Header Component is loaded in appComponent, it represent our navigation menu
 *
 */
