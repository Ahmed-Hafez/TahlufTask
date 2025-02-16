import { TextBoxComponent } from '../components/controls/text-box/text-box.component';
import { IControl } from '../interfaces/IControl.interface';
import { Border } from './border.model';
import { Control } from './control.model';

export class TextBox implements Control, IControl {
  readonly type: string = 'textbox';
  id: string = '';
  name: string = '';
  border?: Border;
  placeholder?: string = '';

  constructor(id: string, name: string, border?: Border, placeholder: string = '') {
    this.id = id;
    this.name = name;
    this.border = border;
    this.placeholder = placeholder;
  }

  getControlType() {
    return TextBoxComponent;
  }
}
