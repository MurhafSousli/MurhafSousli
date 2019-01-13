import { State, Action, StateContext } from '@ngxs/store';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { GetInfo, UpdateInfo } from './info.actions';
import { InfoService } from './info.service';
import { InfoStateModel } from './info.model';

@State<InfoStateModel>({
    name: 'info'
})
export class InfoState {

    constructor(private _info: InfoService) { }

    @Action(GetInfo)
    getInfo({ patchState }: StateContext<InfoStateModel>) {
        return this._info.getInfo().pipe(
            tap(() => {
                patchState({

                });
            }),
            catchError(() => of(null))
        );
    }

    @Action(UpdateInfo)
    updateInfo({ setState }: StateContext<InfoStateModel>, payload: UpdateInfo) {
        return this._info.updateInfo(payload).pipe(
            tap(() => {
                setState({

                });
            }),
            catchError(() => of(null).pipe(
                tap(() => {
                    setState({

                    });
                })
            ))
        );
    }

}