import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Router} from "@angular/router";
import {WpEndpoint, WpQueryArgs, CollectionResponse} from 'ng2-wp-api';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {

  endpoint = WpEndpoint.categories;
  args = new WpQueryArgs({
    per_page: 100
  });
  cats;
  noResponse;

  constructor(private _router:Router) {
  }

  wpResponse(event:CollectionResponse) {
    if(event.error){
      this.noResponse = "Server Error";
    }
    else{
      this.cats = event.data;
    }
  }

  navigate(catSlug?) {
    if(!catSlug){
      this._router.navigate(['/blog']);
    }
    else{
      this._router.navigate(['/blog', {id: catSlug}]);
    }
  }

}
