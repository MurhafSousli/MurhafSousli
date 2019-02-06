import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  host: {
    'class': 'app-page'
  },
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectViewComponent implements OnInit {

  project$: Observable<any>;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.project$ = this._route.params.pipe(
      map((params: Params) => {
        return params['id'];
      })
    );
  }

}
