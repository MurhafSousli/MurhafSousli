import {Component, OnInit, ViewChild, ElementRef, Renderer} from '@angular/core';
import {Http} from "@angular/http";
import {Collection, WpHelper, QueryArgs} from "ng2-wp-api";

import {Education} from './education';
import {Skills} from './skills';
import {Experience} from './experience';
import {Workflow} from './workflow';

import {AppState} from "../../app.service";
import {ProjectsList} from "../../components/projects";

@Component({
  selector: 'resume',
  template: require('./resume.html'),
  directives: [Skills, Workflow, Education, Experience, Collection, ProjectsList]
})

export class Resume implements OnInit {

  data;
  projectEndpoint;
  projectArgs;

  @ViewChild("intro") introRef:ElementRef;

  constructor(private http: Http, private appState: AppState, private renderer: Renderer) {
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
        this.setIntroHeight();
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

  /** set the height of intro section to fit content height (required for height transistion) */
  setIntroHeight(){
    setTimeout(()=>{
      let intro: HTMLElement = this.introRef.nativeElement;
      let contentHeight = intro.lastElementChild.clientHeight;
      this.renderer.setElementStyle(this.introRef.nativeElement, 'height', contentHeight + 250 + 'px');
    }, 100);

  }
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
