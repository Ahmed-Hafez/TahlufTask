import { Component, input } from '@angular/core';
import { AbstractSettingDirective } from '../../../directives/abstract-setting/abstract-setting.directive';
import { FormsModule } from '@angular/forms';
import { TextArea } from '../../../models/text-area.model';
import { TextBox } from '../../../models/text-box.model';

@Component({
  selector: 'app-textbox-setting',
  imports: [FormsModule],
  templateUrl: './textbox-setting.component.html',
  styleUrl: './textbox-setting.component.scss'
})
export class TextboxSettingComponent extends AbstractSettingDirective<TextBox> {

}
