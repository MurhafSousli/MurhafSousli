import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AppState} from "../../app.service";

@Component({
  selector: 'no-content',
  template: require('./no-content.html')
})
export class NoContent implements OnInit {

  title;
  body;

  constructor(private titleService:Title, private appState:AppState) {

  }

  ngOnInit() {
    this.titleService.setTitle("Murhaf Sousli");
    let err = this.appState.get('error');
    if(err){
      if(err.code == ''){

      }
      this.appState.set('error', undefined);
    }
  }

}

/*  TODO: make no content dynamic from app data.
 *  TODO: make simple design template
 */

/*
 * NoContent component displays 404 page.
 */
