import { IControl } from '../interfaces/IControl.interface';
import { Button } from '../models/Button.model ';
import { Control } from '../models/control.model';
import { TextArea } from '../models/text-area.model';
import { TextBox } from '../models/text-box.model';

export const controlFactory: Record<string, (control: Control) => IControl> = {
  textbox: (control) =>
    new TextBox(
      control.id,
      control.name,
      (control as TextBox).border,
      (control as TextBox).placeholder
    ),
  button: (control) =>
    new Button(
      control.id,
      control.name,
      (control as Button).border,
      (control as Button).caption
    ),
  textarea: (control) =>
    new TextArea(
      control.id,
      control.name,
      (control as TextArea).border,
      (control as TextArea).rows,
      (control as TextArea).columns
    ),
};
