import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'cool-button-content',
  templateUrl: './cool-button-content.component.html',
  styleUrls: ['./cool-button-content.component.scss']
})
export class CoolButtonContentComponent {

  @Input() icon: string | string[];
  @Input() content: TemplateRef<any>;
  @Input() active: boolean;

}
