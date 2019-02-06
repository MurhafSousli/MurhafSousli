import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private _afs: AngularFirestore) {
  }

  getAll(): Observable<any> {
    return of([]);
  }

  get(payload: any): Observable<any> {
    return of([]);
  }

  add(payload: any): Observable<any> {
    return of(true);
  }

  update(payload: any): Observable<any> {
    return of(true);
  }

  remove(id: string): Observable<any> {
    return of(true);
  }
}
