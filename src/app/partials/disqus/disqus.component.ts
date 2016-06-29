import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'disqus',
  template: '<div id="disqus_thread"></div>',
})

export class Disqus {

  _dom;

  @Input() public identifier: string;

  @Input() public shortname: string;

  constructor(private _el: ElementRef)
  {
    this._dom = _el.nativeElement;
  }


  /**
   * Component on init
   */
  ngOnInit() {
    if ((<any>window).DISQUS === undefined) {
      this._addScriptTag();
    } else {
      this._reset();
    }
  }

  /**
   * Reset Disqus with new information.
   */
  _reset() {
    (<any>window).DISQUS.reset({
      reload: true,
      config: this._getConfig()
    });
  }

  /**
   * Add the Disqus script to the document.
   */
  _addScriptTag() {
    (<any>window).disqus_config = this._getConfig();
    let script = this._buildScriptTag(`//${this.shortname}.disqus.com/embed.js`);
    this._dom.appendChild(script);
  }

  /**
   * Get Disqus config
   */
  _getConfig() {
    let _self = this;
    return function () {
      this.page.url = 'http://murhafsousli.com';
      this.page.identifier = _self.identifier;
      this.language = 'en';
    };
  }

  /**
   * Build the Disqus script element.
   * @param  {string} src
   * @return {HTMLScriptElement}
   */
  _buildScriptTag(src: string): HTMLScriptElement {
    let script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.type = 'text/javascript';
    script.setAttribute('data-timestamp', new Date().getTime().toString());
    return script;
  }
}
