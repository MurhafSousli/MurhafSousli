import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../shared/shared.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { TextFieldModule } from '@angular/cdk/text-field';
import { DialogComponent } from './dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    OverlayModule,
    TextFieldModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYTzpHy9D0ANZLV82bsf1wCpOxOzAIDpE'
    }),
    RouterModule.forChild([{path: '', component: ContactComponent}])
  ],
  declarations: [ContactComponent, DialogComponent, CardComponent, MapComponent],
  entryComponents: [DialogComponent]
})
export class ContactModule {
}
