import { ButtonComponent } from '../components/controls/button/button.component';
import { IControl } from '../interfaces/IControl.interface';
import { Border } from './border.model';
import { Control } from './control.model';

export class Button implements Control, IControl {
  readonly type: string = 'button';
  id: string = '';
  name: string = '';
  border?: Border;
  caption?: string = '';

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  getControlType() {
    return ButtonComponent;
  }
}
