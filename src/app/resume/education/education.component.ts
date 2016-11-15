import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit() {
  }

}
