import {Component} from '@angular/core';
import {AppState} from "../../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'search-box',
  styles: [require('./searchbox.scss')],
  template: `
    <div class="searchbox">
      <div class="search-ico">
        <i class="fa fa-search fa-5x"></i>
      </div>  
      <div class="search-input">
        <input (keyup.enter)="search($event.target.value)" type="text"/>
      </div>
    </div>
  `
})

export class Searchbox {

  constructor(public appState:AppState,
              private router:Router) {
  }

  search(key:string) {
    this.router.navigate(['Search', {key: key}]);
    this.appState['lightbox'] = false;
  }
}
