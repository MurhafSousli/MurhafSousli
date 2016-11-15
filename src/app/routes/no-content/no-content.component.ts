import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
