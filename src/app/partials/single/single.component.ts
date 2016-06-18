import {Component, Input} from '@angular/core';
import {Post} from "../../service/models";
//import {FillHeight} from '../../directives/fill-height';

@Component({
  selector: 'single',
  template: require('./single.html'),
  styles: [require('./single.scss')],
  //directives:[FillHeight]
})

export class Single{
  @Input() post:Post;
  constructor(){

  }
  ngOnInit(){
    console.log(this.post);
  }
  /*
   *  UI animation & functions here
   */
}
