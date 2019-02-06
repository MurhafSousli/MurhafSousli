import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ContactForm } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private _http: HttpClient) {
  }

  sendEmail(payload: ContactForm): Observable<any> {
    return this._http
      .post('https://www.enformed.io/nzu4f1k8/', JSON.stringify(payload))
      .pipe(
        tap(res => {
          console.log(res);
          // this.disableForm(false);
          // this.form.reset();
          // this.openDialog();
        })
      );
  }
}
