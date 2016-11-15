import {Component, ChangeDetectionStrategy} from '@angular/core';
import {WpService} from "ng2-wp-api";
import {IAppData} from "./store/data.reducer";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  appData;
  wpLoader;

  constructor(private wpService: WpService,
              private store: Store<IAppData>) {
  }

  ngOnInit() {
    this.wpService.config.baseUrl = "http://localhost/wordpress"; //"http://portfolio.murhafsousli.com";
    this.wpLoader = this.wpService.config.loading;

    this.wpService.link('../assets/data.json').subscribe((appData)=> {
      this.store.dispatch({payload: appData, type: ''});
    });
    this.appData = this.store.select('data');
  }

}
