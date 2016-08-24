import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'no-content',
  template: require('./no-content.html')
})
export class NoContent implements OnInit {

  constructor(private titleService:Title) {

  }

  ngOnInit() {
    this.titleService.setTitle("Murhaf Sousli | 404");
  }

}

/*
 * NoContent component displays 404 page.
 */
