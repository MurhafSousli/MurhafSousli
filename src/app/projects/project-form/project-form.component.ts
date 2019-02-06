import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  test;
  @Output() value = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  testOutput(e) {
    console.log(e);
  }

}
