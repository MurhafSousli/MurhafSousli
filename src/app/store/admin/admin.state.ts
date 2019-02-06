import { State, Action, StateContext, NgxsOnInit } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';

import { GetInfo, GetInfoFailed, GetInfoSuccess, UpdateInfo, UpdateInfoFailed, UpdateInfoSuccess } from './admin.actions';
import { AdminService } from './admin.service';
import { Info, AdminStateModel } from './admin.model';

@State<AdminStateModel>({
  name: 'admin',
  defaults: {
    info: null,
    infoForm: {
      model: null,
      dirty: false,
      status: '',
      errors: {}
    },
    error: null,
    loading: false
  }
})
export class AdminState implements NgxsOnInit {

  constructor(private _info: AdminService) {
  }

  ngxsOnInit({dispatch}: StateContext<AdminStateModel>) {
    dispatch(new GetInfo());
  }

  @Action(GetInfo)
  getInfo({patchState, dispatch}: StateContext<AdminStateModel>) {
    patchState({loading: true});
    this._info.getInfo().pipe(
      tap((info: Info) => {
        dispatch(new GetInfoSuccess(info));
      }),
      catchError((error: Error) => dispatch(new GetInfoFailed(error)))
    ).subscribe();
  }

  @Action(UpdateInfo)
  updateInfo({patchState, dispatch, getState}: StateContext<AdminStateModel>) {
    patchState({loading: true});
    const formValue = getState().infoForm.model;
    return this._info.updateInfo(formValue).pipe(
      tap((res) =>
        dispatch(new UpdateInfoSuccess(res))
      ),
      catchError((error: Error) =>
        dispatch(new UpdateInfoFailed(error))
      )
    );
  }

  @Action([GetInfoSuccess, UpdateInfoSuccess])
  infoSuccess({patchState}: StateContext<AdminStateModel>, {info}: GetInfoSuccess | UpdateInfoSuccess) {
    patchState({
      info: info,
      loading: false,
      error: null
    });
  }

  @Action([GetInfoFailed, UpdateInfoFailed])
  infoFailed({patchState}: StateContext<AdminStateModel>, {error}: GetInfoFailed | UpdateInfoFailed) {
    patchState({
      loading: false,
      error: error
    });
  }

}
