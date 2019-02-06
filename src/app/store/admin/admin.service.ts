import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Info } from './admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _infoDocument: AngularFirestoreDocument<Info> = this._afs.collection('admin').doc('info');

  constructor(private _afs: AngularFirestore) {
  }

  getInfo(): Observable<Info> {
    return from(this._infoDocument.valueChanges().pipe(
      take(1)
    ));
  }

  updateInfo(data: Info): Observable<Info> {
    return from(this._infoDocument.set(data, {merge: true})).pipe(
      switchMap(() => this.getInfo())
    );
  }

}
