import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  host: {
    'class': 'app-page'
  },
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectEditComponent implements OnInit {

  project$: Observable<any>;

  constructor(private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this.project$ = this._route.params.pipe(
      map((params: Params) => {
        return params['id'];
      })
    );
  }

  saveChanges() {
  }

  discard() {
    this._router.navigate(['/projects']);
  }

  deleteProject() {
  }
}
