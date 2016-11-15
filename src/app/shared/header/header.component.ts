import {Component, ChangeDetectionStrategy, Input} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent{

  /** Menu data */
  @Input() data;
  /** Is mobile menu open */
  isActive:boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.router.events.subscribe(() => {
      /** fix top position when navigating */
      window.scroll(0, 0);
    });
  }

  navigate(target?: string){
    this.router.navigate([target]);
    this.isActive = false;
  }
}
