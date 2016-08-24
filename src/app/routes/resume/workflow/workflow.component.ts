import {Component, Input, ViewChild, ElementRef, Renderer} from '@angular/core';

@Component({
  selector: 'workflow',
  template: require('./workflow.html')
})
export class Workflow {
  @Input() icons: any;
  selectedIcon: any = false;
  switcher: boolean = false;

  @ViewChild('mac') macScreen: ElementRef;

  constructor(private renderer: Renderer){

  }

  ngAfterContentInit() {
    setTimeout(()=> {
      /** fix height for mobile */
        if (window.matchMedia("(min-width: 480px)").matches) {
          let height = this.macScreen.nativeElement.clientWidth * (9 / 16);
          this.renderer.setElementStyle(this.macScreen.nativeElement, 'height', height +'px');
        }
        else {
          let height = this.macScreen.nativeElement.clientWidth;
          this.renderer.setElementStyle(this.macScreen.nativeElement, 'height', height +'px');
        }
      }
    , 500);
  }

  iconClick(icon: any) {
    this.switcher = false;
    setTimeout(()=> {
      this.selectedIcon = icon;
      this.switcher = true;
    }, 50);
  }

}
