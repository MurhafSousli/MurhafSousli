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

  ngAfterViewInit() {
    console.log( this.macScreen.nativeElement.clientWidth);
    this.screenHeight = this.macScreen.nativeElement.clientWidth * (9 / 16);
  }

  iconClick(icon: any) {
    this.switcher = false;
    setTimeout(()=> {
      this.selectedIcon = icon;
      this.switcher = true;
    }, 50);
  }

}
