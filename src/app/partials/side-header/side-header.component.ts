import {Component} from '@angular/core';
import {RouterActive} from "../../directives/router-active";
import {Lightbox} from '../lightbox';
import {Searchbox} from '../search-box';
import {AppState} from "../../app.service";
import {Router} from "@angular/router-deprecated";

@Component({
  selector: 'header',
  styles: [require('./side-header.scss')],
  directives: [RouterActive, Lightbox, Searchbox],
  template: require('./side-header.html')
})

export class SideHeader {
  logo:string = require('../../../assets/img/ladybug.svg');

  constructor(public appState:AppState,
              private router: Router) {
  }

}
