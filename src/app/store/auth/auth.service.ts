import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() {
    }

    login({ username, password }: any): Observable<any> {
        if (username === 'murhaf' && password === 'freekick') {
            return of(true);
        }
        return of(false);
    }

    logout(): Observable<any> {
        return of({});
    }
}