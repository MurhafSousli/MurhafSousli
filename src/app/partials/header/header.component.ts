import {Component} from '@angular/core';
import {RouterActive} from "../../directives/router-active";

@Component({
  selector: 'header',
  template: require('./header.html'),
  styles: [require('./header.scss')],
  directives: [RouterActive]
})

export class Header{
  logo: string = require('../../assets/img/ladybug.svg');
  constructor(){

  }
}
