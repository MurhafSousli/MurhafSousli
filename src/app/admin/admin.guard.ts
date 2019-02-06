import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  @Select('auth.loggedIn') loggedIn: Observable<boolean>;

  canActivate() {
    return this.loggedIn;
  }
}
