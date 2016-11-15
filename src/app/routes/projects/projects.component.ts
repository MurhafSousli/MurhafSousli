import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'projects-route',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
