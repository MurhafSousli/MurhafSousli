import { Component } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'home',
  styles: [ require('./home.css') ],
  template: require('./home.html'),
  directives: [Menu]
})
export class Home {


}
