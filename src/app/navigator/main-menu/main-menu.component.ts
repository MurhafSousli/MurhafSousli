import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'main-menu',
  templateUrl: 'main-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent implements OnInit {

  @Select('auth.loggedIn') loggedIn: Observable<boolean>;

  constructor() {
  }

  ngOnInit() {
  }
}
