import {Component, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'workflow',
  template: require('./workflow.html')
})
export class Workflow {
  @Input() icons: any;
  screenHeight;
  selectedIcon: any = false;
  switcher: boolean = false;

  @ViewChild('mac') macScreen: ElementRef;

  ngAfterContentInit() {
    setTimeout(()=> {
      /** fix height for mobile */
        if (window.matchMedia("(min-width: 480px)").matches) {
          this.screenHeight = this.macScreen.nativeElement.clientWidth * (9 / 16);
        }
        else {
          this.screenHeight = this.macScreen.nativeElement.clientWidth;
        }
      }
    , 500);
    console.log(this.macScreen.nativeElement.clientWidth);
  }

  iconClick(icon: any) {
    this.switcher = false;
    setTimeout(()=> {
      this.selectedIcon = icon;
      this.switcher = true;
    }, 50);
  }

}
