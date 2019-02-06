import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { AuthForm } from './auth.model';
import UserCredential = firebase.auth.UserCredential;
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get state(): Observable<User> {
    return this._afa.authState;
  }

  constructor(private _afa: AngularFireAuth) {
  }

  login({email, password}: AuthForm): Observable<UserCredential> {
    const auth = this._afa.auth.signInWithEmailAndPassword(email, password);
    return from(auth);
  }

  logout(): Observable<void> {
    return from(this._afa.auth.signOut());
  }
}
