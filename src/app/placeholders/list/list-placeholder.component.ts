import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'list-placeholder',
  templateUrl: './list-placeholder.component.html',
  styleUrls: ['./list-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPlaceholderComponent {
}
