import {Component, Input, ElementRef, OnInit, ChangeDetectionStrategy} from '@angular/core';

const ProgressBarLib = require('progressbar.js');

@Component({
  selector: 'progress-bar',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProgressBarComponent implements OnInit{

  @Input() args;
  @Input() value:number;
  @Input() text:string;
  @Input() type;
  bar;

  constructor(private elementRef:ElementRef) {
  }

  ngOnInit() {
    if (this.type === "line") {
      this.bar = new ProgressBarLib.Line(this.elementRef.nativeElement,  this.args);
    }
    else if (this.type === "circle") {
      this.bar = new ProgressBarLib.Circle(this.elementRef.nativeElement, this.args);
    }
    else {
      this.bar = new ProgressBarLib.SemiCircle(this.elementRef.nativeElement, this.args);
    }
    if(this.text !== undefined)
      this.bar.setText(this.text);
    this.bar.animate(this.value);
  }

  ngOnDestroy() {
    this.bar.destroy();
  }
}





