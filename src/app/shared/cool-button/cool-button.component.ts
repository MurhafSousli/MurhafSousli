import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  host: {
    '[class.cool-btn-active]': 'hover || active'
  },
  selector: 'cool-button',
  templateUrl: './cool-button.component.html',
  styleUrls: ['./cool-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoolButtonComponent {
  active: boolean;
  hover: boolean;
  @Input() icon: string | string[] = 'arrow-right';
}
