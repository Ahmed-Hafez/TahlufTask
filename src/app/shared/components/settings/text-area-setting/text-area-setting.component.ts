import { Component } from '@angular/core';
import { AbstractSettingDirective } from '../../../directives/abstract-setting/abstract-setting.directive';
import { FormsModule } from '@angular/forms';
import { TextArea } from '../../../models/text-area.model';

@Component({
  selector: 'app-text-area-setting',
  imports: [FormsModule],
  templateUrl: './text-area-setting.component.html',
  styleUrl: './text-area-setting.component.scss'
})
export class TextAreaSettingComponent extends AbstractSettingDirective<TextArea> {

}
