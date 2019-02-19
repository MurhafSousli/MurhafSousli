import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';

import { Login } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _store: Store) {
  }

  ngOnInit() {
    this.loginFormGroup = this._formBuilder.group({
      email: '',
      password: '',
    });
  }

  login() {
    this._store.dispatch(new Login());
  }
}
