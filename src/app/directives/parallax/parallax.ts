import { Directive,
  ElementRef,
  HostListener,
  Input,
  } from '@angular/core';

interface ParallaxConfig  {

  cssKey?: string;

  parallaxCss?: string;

  parallaxRatio?: number;

  parallaxInitVal?: number;

  parallaxIf?: any;

  scrollerId?: string;

  maxValue?: number;

  minValue?: number;

  cssUnit?: string;

  scrollElement?: HTMLElement;

  parallaxElement?: HTMLElement;

  name?: string;

  cb?(): void;

  cb_args?: any[];

  cb_context?: any;
}

@Directive({
  selector: '[parallax]'
})
export class Parallax {
  name: string = 'parallaxDirective';

  @Input() config: ParallaxConfig;

  @Input() cssKey: string = 'backgroundPosition';
  @Input() parallaxCss: string = 'backgroundPositionY';
  @Input() parallaxAxis: string = 'Y';
  @Input() parallaxRatio: number = -.7;
  @Input() parallaxInitVal: number = 0;
  @Input() parallaxIf: any = true;
  @Input() scrollerId: string;
  @Input() maxValue: number;
  @Input() minValue: number;
  @Input() cssUnit: string = 'px';
  @Input() cb;
  @Input() cb_context: any = null;
  @Input() cb_args: any[] = [];

  parallaxStyles: {} = {};

  private cssValue: string;
  private isSpecialVal: boolean = false;

  private hostElement: HTMLElement;
  @Input() scrollElement: any;
  @Input() parallaxElement: HTMLElement;


  constructor(element: ElementRef) {
    this.hostElement = element.nativeElement;

    console.log('hello');
  }

  private evaluateScroll = () => {
    if (this.parallaxIf) {
      let resultVal: string;
      let calcVal: number;

      if (this.scrollElement instanceof Window)
        calcVal = this.scrollElement.scrollY * this.parallaxRatio + this.parallaxInitVal;
      else
        calcVal = this.scrollElement.scrollTop * this.parallaxRatio + this.parallaxInitVal;

      if (this.maxValue !== undefined && calcVal >= this.maxValue)
        calcVal = this.maxValue;
      else if (this.minValue !== undefined && calcVal <= this.minValue)
        calcVal = this.minValue;

      // added after realizing original setup wasn't compatible in Firefox
      // debugger;
      if (this.cssKey === 'backgroundPosition') {
        if (this.parallaxAxis === 'X') {
          resultVal = calcVal + this.cssUnit + ' 0';
        } else {
          resultVal = '0 ' + calcVal + this.cssUnit;
        }
      } else if (this.isSpecialVal) {
        resultVal = this.cssValue + '(' + calcVal + this.cssUnit + ')';
      } else {
        resultVal = calcVal + this.cssUnit;
      }

      if (this.cb) {
        // console.log('this should be running')
        this.cb.apply(this.cb_context, this.cb_args);
      }

      this.parallaxElement.style[this.cssKey] = resultVal;
    }
  }

  ngOnInit() {
    let cssValArray: string[];

    console.log('%s initialized on element', this.name, this.hostElement);
    console.log(this);

    for (let prop in this.config) { this[prop] = this.config[prop]; }
    this.parallaxCss = this.parallaxCss ? this.parallaxCss : 'backgroundPositionY';
    if (this.parallaxCss.match(/backgroundPosition/i)) {
      if (this.parallaxCss.split('backgroundPosition')[1].toUpperCase() === 'X') {
        this.parallaxAxis = 'X';
      }

      this.parallaxCss = 'backgroundPosition';
    }

    cssValArray = this.parallaxCss.split(':');
    this.cssKey = cssValArray[0];
    this.cssValue = cssValArray[1];

    this.isSpecialVal = this.cssValue ? true : false;
    if (!this.cssValue) this.cssValue = this.cssKey;

    this.parallaxRatio = +this.parallaxRatio;
    this.parallaxInitVal = +this.parallaxInitVal;

    this.parallaxElement = this.parallaxElement || this.hostElement;
    if (!this.scrollElement) {
      if (document.getElementById('parallaxScroll'))
        this.scrollElement = document.getElementById('parallaxScroll');
      else if (this.scrollerId) {
        try {
          this.scrollElement = document.getElementById(this.scrollerId);
          if (!this.scrollElement)
            throw(`The ID passed through the parallaxConfig ('${this.scrollerId}') object was not found in the document.  Defaulting to tracking the scrolling of the window.`);
        } catch(e) {
          console.warn(e);
          this.scrollElement = window;
        }
      } else this.scrollElement = window;
    }

    this.evaluateScroll();

    this.scrollElement.addEventListener('scroll', this.evaluateScroll.bind(this));
  }


}


//export { Parallax, ParallaxConfig };
