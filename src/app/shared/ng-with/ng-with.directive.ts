import {Directive, TemplateRef, EmbeddedViewRef, ViewContainerRef} from '@angular/core'

export class NgWithContext {
  constructor(public $implicit: any) {
  }
}

@Directive({
  selector: '[ngWith][ngWithBe]',
  inputs: ['ngWithBe']
})
export class NgWith {

  _value: any;
  _ref: EmbeddedViewRef<NgWithContext>;

  constructor(public template: TemplateRef<NgWithContext>, public vcr: ViewContainerRef) {
  }

  get ngWithBe(): any {
    return this._value;
  }

  set ngWithBe(val: any) {
    this._value = val;
    if (this._ref) {
      if (val) {
        this._ref.context.$implicit = val;
      } else {
        this._ref.destroy();
        this._ref = null;
      }
    } else if (val) {
      this._init();
    }
  }

  private _init(): void {
    this._ref = this.vcr.createEmbeddedView(this.template, new NgWithContext(this._value));
  }
}
