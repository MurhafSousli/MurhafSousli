import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {LightBoxService} from "./lightbox.service";

@Component({
  selector: 'lightbox',
  templateUrl: 'lightbox.component.html',
  styleUrls: ['lightbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightBoxComponent implements OnInit {

  constructor(private lightboxService: LightBoxService) {
  }

  ngOnInit() {
  }

}
