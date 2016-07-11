import {Component, Input} from '@angular/core';
import {WpCollection, WpHelper} from '../../service';
import {Card} from '../../views/card';
import {Args} from "../../service/models";
import {AppState} from "../../app.service";
import {ScrollSpyService, ScrollSpyDirective} from "ng2-scrollspy";

@Component({
  selector: 'collection',
  template: require('./collection.html'),
  directives: [Card, ScrollSpyDirective],
  providers: [WpCollection, ScrollSpyService]
})

export class Collection {

  data;
  @Input() endpoint:WpHelper.WpEndpoint;
  @Input() args: Args;

  constructor(public service:WpCollection,
              private appState:AppState,
              private scrollSpyService:ScrollSpyService) {
    appState.set('loading', true);
  }

  ngOnInit() {
    //check if args is undefined
    if(!this.args){
      this.args = new Args();
    }
    //add embed to args.
    this.args._embed = true;
    this.fetchItems();
  }
  ngAfterViewInit() {
    this.scrollSpyService.getObservable('window').subscribe((e: any) => {
      console.log('ScrollSpy::window: ', e);
      
    });
  }

  fetchItems() {
    this.data = [];
    this.service.setEndpoint(this.endpoint);
    this.service.fetch(this.args).subscribe(
      (res) => {
        this.data = res;
        this.appState.set('loading', false);
      },
      err => console.log(err)
    );
  }

  fetchMore() {
    this.appState.set('loading', true);
    this.service.more().subscribe(

      res => {
        this.data.concat(res);
        this.appState.set('loading', false);
      },
      err => console.log(err)
    );
  }

  /*
    TODO: Add load on scroll feature with loading animation, check if masonry does that out of the box.
   */

}


