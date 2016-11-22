import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'card-placeholder',
  templateUrl: 'card-placeholder.component.html',
  styleUrls: ['card-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPlaceholderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
