import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'no-content',
  template: require('./no-content.html')
})
export class NoContent implements OnInit {

  title;
  body;
  img;

  constructor(private titleService:Title) {

  }

  ngOnInit() {
    this.titleService.setTitle("Murhaf Sousli");
  }

}

/*  TODO: make no content dynamic from app data.
 *  TODO: make simple design template
 */

/*
 * NoContent component displays 404 page.
 */
