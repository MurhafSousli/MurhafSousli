import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() {
  }

  getInfo(): Observable<any> {
    return of({});
  }

  updateInfo(payload: any): Observable<any> {
    return of({});
  }

}
