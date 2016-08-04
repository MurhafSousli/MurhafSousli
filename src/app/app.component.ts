import {Component, ViewEncapsulation} from '@angular/core';
import {Http} from "@angular/http";
import {WpState} from "ng2-wp-api/ng2-wp-api";

import { MetaService } from 'ng2-meta';

import {AppState} from './app.service';
import {Header} from './components/header';
import {SvgLoader} from'./components/svg-loader';
import {Lightbox} from './components/lightbox';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  directives: [Header, SvgLoader, Lightbox],
  styleUrls: ['./style/style.scss'],
  template: require('./app.html')
})
export class App {

  data:any;

  constructor(private appState: AppState,
              private http:Http,
              private metaService:MetaService,
              public wpState: WpState){
    //Initialize loading and lightbox state
    appState.set('loading', false);
    appState.set('lightbox', false);
    wpState.setBaseUrl(" http://portfolio.murhafsousli.com");
  }

  ngOnInit(){
    this.fetchAppData();
  }

  /**  fetch app config data. */
  fetchAppData(){
    this.http.get('../../assets/data.json').map(res => res.json()).subscribe(
      (res:any) => {
        this.data = res;
        this.appState.set("data", res);
      },
      err => console.log("[Failed to load config data]: ", err)
    );
  }

}


/*
 * Put the initial configuration for the app in data.json located in "src/assets/data.json"
   This will be fetched only once and stored in AppState service,
   so it can be available to all components.

    <svg-loader> renders any SVG file, Here it is used to show loading while fetching data from the service.
   the loader need SVG as source and GIF as fallback (for IE)
    Use data.loader.svg for SVG source path
    and data.loader.gif for GIF source path
 */
