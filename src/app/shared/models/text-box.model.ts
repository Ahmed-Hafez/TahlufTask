import { TextBoxComponent } from '../components/controls/text-box/text-box.component';
import { TextboxSettingComponent } from '../components/settings/textbox-setting/textbox-setting.component';
import { IControl } from '../interfaces/IControl.interface';
import { Border } from './border.model';

export class TextBox implements IControl {
  readonly type: string = 'textbox';
  id: string = '';
  name: string = '';
  border?: Border;
  placeholder?: string = '';

  constructor(
    id: string,
    name: string,
    border?: Border,
    placeholder: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.border = border;
    this.placeholder = placeholder;
  }

  getControlComponent() {
    return TextBoxComponent;
  }

  getControlSetting() {
    return TextboxSettingComponent;
  }
}
