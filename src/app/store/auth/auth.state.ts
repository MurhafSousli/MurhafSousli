import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Login, Logout } from './auth.actions';
import { AuthService } from './auth.service';
import { AuthStateModel } from './auth.model';

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        loggedIn: true
    }
})
export class AuthState {

    constructor(private _auth: AuthService) { }

    @Action(Login)
    login({ patchState }: StateContext<AuthStateModel>, { payload }: Login) {
        return this._auth.login(payload).pipe(
            tap(() => {
                patchState({
                    loggedIn: true
                });
            })
        );
    }

    @Action(Logout)
    logout({ setState }: StateContext<AuthStateModel>) {
        return this._auth.logout().pipe(
            tap(() => {
                setState({
                    loggedIn: false
                });
            })
        );
    }

}