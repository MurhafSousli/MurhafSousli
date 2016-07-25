import {Component} from '@angular/core';
import {Http} from "@angular/http";
import {Collection, WpHelper, QueryArgs} from "ng2-wp-api/ng2-wp-api";

import {Education} from './education';
import {Languages} from './languages';
import {Skills} from './skills';
import {Experience} from './experience';

import {AppState} from "../../app.service";

@Component({
  selector: 'resume',
  template: require('./resume.html'),
  directives: [Education, Languages, Skills, Experience, Collection]
})

export class Resume {

  data;
  projectEndpoint;
  projectArgs;

  constructor(private http:Http, private appState:AppState) {
    appState.set('loading', true);
  }

  ngOnInit() {
    this.http.get("../../../assets/resume-data.json").map(res => res.json()).subscribe(
      (res) => {
        this.data = res;
        this.appState.set('loading', false);
      },
      err => console.log("[Resume]: ", err)
    );
    this.getProjects();
  }

  getProjects() {
    this.projectEndpoint = WpHelper.Endpoint.Posts;
    let args = new QueryArgs();
    args = new QueryArgs()
    args._embed = true;
    args.per_page = 4;
    this.projectArgs = args;
  }


}


/*
 TODO: Make unique endpoint for resume data.
 */
