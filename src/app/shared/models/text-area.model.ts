import { TextAreaComponent } from '../components/controls/text-area/text-area.component';
import { TextAreaSettingComponent } from '../components/settings/text-area-setting/text-area-setting.component';
import { IControl } from '../interfaces/IControl.interface';
import { Border } from './border.model';
import { Control } from './control.model';

export class TextArea implements IControl {
  readonly type: string = 'textarea';
  id: string = '';
  name: string = '';
  border?: Border;
  rows: number = 1;
  columns: number = 10;

  constructor(
    id: string,
    name: string,
    border?: Border,
    rows: number = 1,
    columns: number = 10
  ) {
    this.id = id;
    this.name = name;
    this.border = border;
    this.rows = rows;
    this.columns = columns;
  }

  getControlComponent() {
    return TextAreaComponent;
  }

  getControlSetting() {
    return TextAreaSettingComponent;
  }
}
