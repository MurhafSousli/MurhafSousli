import { Component } from '@angular/core';
import { mapStyle } from '../contact.helper';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  zoom = 5;
  latitude = 41.044476;
  longitude = 29.007396;
  iconUrl = 'assets/img/pin.svg';
  streetViewControl = false;
  draggingCursor = false;
  disableDefaultUI = false;
  zoomControl = false;
  scaleControl = false;
  styles = mapStyle;

}
