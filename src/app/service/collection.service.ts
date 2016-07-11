/**
 * Created by Murhaf on 7/10/2016.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {WpHelper} from "./helper.service";
import {AppState} from "../app.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class WpCollection {



  //query arguments.
  private args:any;

  //The final url for the http request
  private actionUrl:string;

  //collection pagination properties
  public currentPage:number = 1;
  public totalPages:number = 1;
  public totalObjects:number = 0;

  constructor(private http:Http, private appState:AppState) {
  }

  /*
   * Must set the endpoint before fetching posts.
   * EX: http://localhost/wordpress/wp-json/wp/v2/posts/
   */
  public setEndpoint(endpoint:WpHelper.WpEndpoint) {
    this.actionUrl = WpHelper.baseUrl() + endpoint;
  }

  /*
   * fetch() : request the collection
   * @params: args
   * @return: observable
   */
  public fetch(args?:any):Observable<any> {
    //set our args if exists, required to get more() function to work.
    this.args = args;
    return this.requestCollection();
  }

  /*
   * more() : request next page of the collection if it is available
   */
  public more():Observable<any> {
    if (this.hasMore()) {
      //increment our currentPage then assign it to our args.
      this.args.page = ++this.currentPage;
      return this.requestCollection();
    }
  }

  /*
   *  hasMore() : return true if the next page of the collection is available
   */
  public hasMore():boolean {
    return this.currentPage < this.totalPages;
  }

  private requestCollection():Observable<any>{
    return this.http.get(WpHelper.generateUrl(this.actionUrl, this.args)).map(
      res => {
        //set our totalObject and totalPages from res headers
        this.totalObjects = +res.headers.get('X-WP-Total');
        this.totalPages = +res.headers.get('X-WP-TotalPages');
        return res.json();
      }
    );
  }


}

/*
 * PS: Requests errors should be handled from the subscribe function in the component
 */
