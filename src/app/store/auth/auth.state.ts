import { State, Action, StateContext, NgxsOnInit } from '@ngxs/store';
import { filter, tap } from 'rxjs/operators';

import { Login, LoginFailed, LoginSuccess, Logout } from './auth.actions';
import { AuthStateModel } from './auth.model';
import { AuthService } from './auth.service';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    loggedIn: true,
    loading: false,
    loginForm: {
      model: null,
      dirty: false,
      status: '',
      errors: {}
    },
  }
})
export class AuthState implements NgxsOnInit {

  constructor(private _auth: AuthService) {
  }

  ngxsOnInit({dispatch}: StateContext<AuthStateModel>) {
    this._auth.state.pipe(
      filter((user) => !!user),
      tap(() => dispatch(new LoginSuccess()))
    );
  }

  @Action(Login)
  login({patchState, getState}: StateContext<AuthStateModel>) {
    patchState({loggedIn: true});
    const formValue = getState().loginForm.model;
    this._auth.login(formValue).subscribe();
  }

  @Action(Logout)
  logout({patchState}: StateContext<AuthStateModel>) {
    return this._auth.logout().pipe(
      tap(() => {
        patchState({
          loading: false,
          loggedIn: false
        });
      })
    );
  }

  @Action(LoginSuccess)
  loginSuccess({patchState}: StateContext<AuthStateModel>) {
    patchState({
      loading: false,
      loggedIn: true
    });
  }

  @Action(LoginFailed)
  loginFailed({patchState}: StateContext<AuthStateModel>) {
    patchState({
      loading: false,
      loggedIn: true
    });
  }
}
