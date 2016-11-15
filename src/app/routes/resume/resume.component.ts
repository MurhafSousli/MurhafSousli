import {Component, OnInit, Renderer, ElementRef, ViewChild} from '@angular/core';
import {WpService} from "ng2-wp-api";

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  data;
  @ViewChild("intro") introRef: ElementRef;

  constructor(private  _wpService: WpService, private _renderer: Renderer) {
  }

  ngOnInit() {
    this._wpService.link("../../../assets/resume-data.json").subscribe(
      (res) => {
        this.data = res;
        this.setIntroHeight();
      });
  }

  setIntroHeight() {
    setTimeout(()=> {
      let intro: HTMLElement = this.introRef.nativeElement;
      let contentHeight = intro.lastElementChild.clientHeight;
      this._renderer.setElementStyle(this.introRef.nativeElement, 'height', contentHeight + 250 + 'px');
    }, 100);

  }


}
