import {Component} from '@angular/core';
import {Education} from './education';
import {Languages} from './languages';
import {Skills} from './skills';
//import {Experience} from './experience';

@Component({
  selector: 'resume',
  template: require('./resume.html'),
  styles: [require('./resume.scss')],
  directives: [Education, Languages, Skills]//, Experience]
})

export class Resume {

}
