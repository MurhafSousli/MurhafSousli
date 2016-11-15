import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit() {
  }

}
