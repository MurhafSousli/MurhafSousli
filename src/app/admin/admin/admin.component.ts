import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { Info } from '../../store/admin/admin.model';
import { UpdateInfo } from '../../store/admin/admin.actions';

@Component({
  host: {
    'class': 'app-page'
  },
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Select('admin.info') info$: Observable<Info>;

  infoFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _store: Store) {
  }

  ngOnInit() {
    // Initialize form controls
    this.infoFormGroup = this._formBuilder.group({
      displayName: '',
      email: '',
      bio: '',
      map: '',
      photoUrl: ''
    });
    // Patch form value from Store
    this.info$.pipe(
      filter((info: Info) => !!info),
      tap((info: Info) => this.infoFormGroup.patchValue(info))
    ).subscribe();
  }

  saveChanges() {
    this._store.dispatch(new UpdateInfo());
  }

  discard() {
    this._store.dispatch(new Navigate(['/']));
  }
}
