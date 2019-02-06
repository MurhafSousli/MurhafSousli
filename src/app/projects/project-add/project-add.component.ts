import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddProject } from '../../store/projects/projects.actions';

@Component({
  host: {
    'class': 'app-page'
  },
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectAddComponent implements OnInit {

  constructor(private _router: Router, private _store: Store) {
  }

  ngOnInit() {

  }

  add() {
    this._store.dispatch(new AddProject());
  }

  discard() {
    this._router.navigate(['/projects']);
  }
}
