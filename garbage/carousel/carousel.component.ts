import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {

  @Input() images = [];
  @Input() selected: number;

  constructor() { }

  ngOnInit() {
    console.log(this.images);
  }

}
