import {Component, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'disqus',
  template: '<div id="disqus_thread"></div>',
})

export class Disqus {

  dom:HTMLElement;

  @Input() public identifier:string;

  @Input() public shortname:string;

  constructor(el:ElementRef) {
    this.dom = el.nativeElement;
  }

  ngOnInit() {
    if ((<any>window).DISQUS === undefined) {
      this.addScriptTag();
    }
    else {
      this.reset();
    }
  }

  /**
   * Reset Disqus with new information.
   */
  reset() {
    (<any>window).DISQUS.reset({
      reload: true,
      config: this.getConfig()
    });
  }

  /**
   * Add the Disqus script to the document.
   */
  addScriptTag() {
    (<any>window).disqus_config = this.getConfig();
    let script = this.buildScriptTag(`//${this.shortname}.disqus.com/embed.js`);
    this.dom.appendChild(script);
  }

  /**
   * Get Disqus config
   */
  getConfig() {
    let _self = this;
    return function () {
      this.page.url = window.location.href;
      this.page.identifier = _self.identifier;
      this.language = 'en';
    };
  }

  /**
   * Build the Disqus script element.
   * @param  {string} src
   * @return {HTMLScriptElement}
   */
  buildScriptTag(src:string):HTMLScriptElement {
    let script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.type = 'text/javascript';
    script.setAttribute('data-timestamp', new Date().getTime().toString());
    return script;
  }
}
