import { ButtonComponent } from '../components/controls/button/button.component';
import { ButtonSettingComponent } from '../components/settings/button-setting/button-setting.component';
import { IControl } from '../interfaces/IControl.interface';
import { Border } from './border.model';
import { Control } from './control.model';

export class Button implements IControl {
  readonly type: string = 'button';
  id: string = '';
  name: string = '';
  border?: Border;
  caption?: string = '';

  constructor(id: string, name: string, border?: Border, caption: string = '') {
    this.id = id;
    this.name = name;
    this.border = border;
    this.caption = caption;
  }

  getControlComponent() {
    return ButtonComponent;
  }

  getControlSetting() {
    return ButtonSettingComponent;
  }
}
