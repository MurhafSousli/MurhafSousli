import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { mapStyle } from '../contact.helper';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  coordinates$: Observable<Partial<Coordinates>>;
  @Select('admin.info.map') map$: Observable<string>;

  zoom = 5;
  iconUrl = 'assets/img/pin.svg';
  streetViewControl = false;
  draggingCursor = false;
  disableDefaultUI = false;
  zoomControl = false;
  scaleControl = false;
  styles = mapStyle;

  ngOnInit() {
    this.coordinates$ = this.map$.pipe(
      map((mapCoordinates: string) => {
        const coordinates = mapCoordinates.split(':');
        return {
          latitude: +coordinates[0],
          longitude: +coordinates[1]
        };
      })
    );
  }

}
