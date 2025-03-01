import { Component } from '@angular/core';
import { AbstractSettingDirective } from '../../../directives/abstract-setting/abstract-setting.directive';
import { FormsModule } from '@angular/forms';
import { IControl } from '../../../interfaces/IControl.interface';
import { Button } from '../../../models/Button.model ';

@Component({
  selector: 'app-button-setting',
  imports: [FormsModule],
  templateUrl: './button-setting.component.html',
  styleUrl: './button-setting.component.scss'
})
export class ButtonSettingComponent extends AbstractSettingDirective<Button> {
}
