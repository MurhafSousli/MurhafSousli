import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

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

  info: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _store: Store) {
  }

  ngOnInit() {
    const defaultInfo: Info = {
      displayName: '',
      email: '',
      bio: '',
      map: '',
      photoUrl: ''
    };
    const info: Info = {...defaultInfo, ...this._store.snapshot().admin.info};
    this.info = this._formBuilder.group(info);
  }

  save() {
    this._store.dispatch(new UpdateInfo());
  }

  cancel() {
    this._store.dispatch(new Navigate(['/']));
  }
}
