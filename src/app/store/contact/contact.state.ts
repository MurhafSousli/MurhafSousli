import { State, Action, StateContext } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { SendEmailFailed, SendEmailSuccess, SendEmail } from './contact.actions';
import { ContactService } from './contact.service';
import { ContactStateModel } from './contact.model';

@State<ContactStateModel>({
  name: 'contact',
  defaults: {
    error: null,
    loading: false,
    submitted: false
  }
})
export class ContactState {

  constructor(private _contact: ContactService) {
  }

  @Action(SendEmail)
  sendEmail({patchState, dispatch}: StateContext<ContactStateModel>, payload: any) {
    return this._contact.sendEmail(payload).pipe(
      tap(() => {
        patchState({loading: true});
        dispatch(new SendEmailSuccess());
      }),
      catchError((error: Error) =>
        dispatch(new SendEmailFailed(error))
      )
    );
  }

  @Action(SendEmailSuccess)
  sendEmailSuccess({setState}: StateContext<ContactStateModel>) {
    setState({
      submitted: true,
      loading: false,
      error: null
    });
  }

  @Action(SendEmailFailed)
  sendEmailFailed({setState}: StateContext<ContactStateModel>, {error}: any) {
    setState({
      submitted: false,
      loading: false,
      error: error
    });
  }
}
