import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cool-button',
  templateUrl: './cool-button.component.html',
  styleUrls: ['./cool-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoolButtonComponent {

}
