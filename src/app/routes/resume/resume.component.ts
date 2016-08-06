import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {Collection, WpHelper, QueryArgs} from "ng2-wp-api/ng2-wp-api";

import {Education} from './education';
import {Skills} from './skills';
import {Experience} from './experience';

import {AppState} from "../../app.service";
import {ProjectsList} from "../../components/projects";

@Component({
  selector: 'resume',
  template: require('./resume.html'),
  directives: [Education, Skills, Experience, Collection, ProjectsList]
})

export class Resume implements OnInit {

  data;
  projectEndpoint;
  projectArgs;

  constructor(private http: Http, private appState: AppState) {
    appState.set('loading', true);
  }

  ngOnInit() {
    this.fetchResumeData();
    this.getProjects();
  }

  fetchResumeData() {
    this.http.get("../../../assets/resume-data.json").map(res => res.json()).subscribe(
      (res) => {
        this.data = res;
        this.appState.set('loading', false);
      },
      err => console.log("[Resume]: ", err)
    );
  }

  getProjects() {
    this.projectEndpoint = WpHelper.Endpoint.Posts;
    this.projectArgs = new QueryArgs({
      _embed: true,
      per_page: 4
    });
  }

  scrollTop(duration) {
    scrollToTop(duration);
  }

}

var scrollToTop = (duration): void => {
  if (duration <= 0) return;
  var difference = -document.body.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function () {
    document.body.scrollTop = document.body.scrollTop + perTick;
    if (document.body.scrollTop == 0) return;
    scrollToTop(duration - 10);
  }, 10);
}

/*{
 "company": "Freelancing",
 "address": "Remote",
 "jobTitle": "WordPress theme developer",
 "date": "MAY 2014 - PRESENT",
 "content": [
 "Communicating with clients remotely and face to face",
 "Creating custom theme design on demand",
 "Coding using backend technologies such as PHP to extend WordPress functionality"
 ]
 },*/
