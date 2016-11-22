import {NgModule} from '@angular/core';
import {CardPlaceholderComponent} from './card/card-placeholder.component';
import {ListPlaceholderComponent} from './list/list-placeholder.component';

@NgModule({
  declarations: [
    CardPlaceholderComponent,
    ListPlaceholderComponent
  ],
  exports: [
    ListPlaceholderComponent
  ]
})

export class PlaceholdersModule {
}
