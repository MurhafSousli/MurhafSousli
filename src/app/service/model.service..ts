import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {WpHelper} from "./helper.service";
import {AppState} from "../app.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class WpModel {

  private actionUrl:string;

  constructor(private http:Http, private appState:AppState) {
  }

  public setEndpoint(endpoint:WpHelper.WpEndpoint) {
    this.actionUrl = WpHelper.baseUrl() + endpoint;
  }

  public getSingle = (id):Observable<any>  => {
    return this.http.get(this.actionUrl + id, {headers: WpHelper.getHeaders(this.appState)}).map(res => res.json());
  }

  public add = (body):Observable<any>  => {
    return this.http.post(this.actionUrl, body, {headers: WpHelper.getHeaders(this.appState)}).map(res =>  res.json());
  }

  public update = (id:number, body):Observable<any>  => {
    return this.http.put(this.actionUrl + id, body, {headers: WpHelper.getHeaders(this.appState)}).map(res => res.json());
  }

  public delete = (id:number):Observable<any>  => {
    return this.http.delete(this.actionUrl + id + "?force=true", {headers: WpHelper.getHeaders(this.appState)});
  }

}

