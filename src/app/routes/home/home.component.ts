import {Component, OnInit, ViewChild, ElementRef, Renderer, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {IAppData} from "../../store/data.reducer";
import {Store} from "@ngrx/store";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('cover') cover: ElementRef;

  appData;
  colors = ['#4FC1E9', '#FE424D', '#1AA6B7', '#967ADC', '#48cfad', '#E9583F', '#fff'];
  active = true;

  constructor(private renderer: Renderer, private store: Store<IAppData>) {
  }

  ngOnInit() {
    this.appData = this.store.select('data');
    this.changeCoverShadowColor();
  }

  changeCoverShadowColor() {
    let changeColor = () => {
      setTimeout(()=> {
        if (!this.active) return;
        this.renderer.setElementStyle(this.cover.nativeElement, 'boxShadow', this.getRandomShadow())
        changeColor();
      }, this.getRandomDelay());
    };
    changeColor();
  }

  getRandomShadow() {
    let color = this.colors[Math.floor(Math.random() * this.colors.length)];
    let blur = Math.floor((Math.random() * 25) + 10);
    return '0 0 ' + blur + 'px ' + color;
  }

  getRandomDelay(){
    return Math.floor((Math.random() * 2500) + 1000);
  }

  ngOnDestroy() {
    this.active = false;
  }
}
