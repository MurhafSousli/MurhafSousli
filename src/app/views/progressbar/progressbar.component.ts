import {Component, Input, ElementRef} from '@angular/core';

var ProgressBarLib = require('progressbar.js');

@Component({
  selector: 'progress-bar',
  template: '',
})

export class ProgressBar {

  @Input() args;
  @Input() value:number;
  @Input() text;
  @Input() type;
  bar;

  constructor(private elementRef:ElementRef) {
  }

  ngOnInit() {
    if (this.type == "line") {
      this.bar = new ProgressBarLib.Line(this.elementRef.nativeElement, this.args);
    }
    else if (this.type == "circle") {
      this.bar = new ProgressBarLib.Circle(this.elementRef.nativeElement, this.args);
    }
    else {
      this.bar = new ProgressBarLib.SemiCircle(this.elementRef.nativeElement, this.args);
    }
    this.bar.setText(this.text);
    this.bar.animate(this.value);
  }

  ngOnDestroy() {
    this.bar.destroy();
  }
}
