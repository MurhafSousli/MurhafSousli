import {Component, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'workflow',
  template: require('./workflow.html'),
  styles:[`
    .mac-screen-border{
      max-width: 554px;
    }  
  `]
})
export class Workflow {
  @Input() icons: any;
  screenHeight;
  selectedIcon: any = false;
  switcher: boolean = false;

  @ViewChild('mac') macScreen: ElementRef;

  ngAfterContentInit() {
    setTimeout(()=> this.screenHeight = this.macScreen.nativeElement.clientWidth * (9 / 16), 500);
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
