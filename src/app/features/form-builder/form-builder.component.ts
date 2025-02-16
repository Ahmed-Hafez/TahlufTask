import { AfterViewInit, ChangeDetectorRef, Component, inject, input } from '@angular/core';
import { Control } from '../../shared/models/control.model';
import { TextBox } from '../../shared/models/text-box.model';
import { Button } from '../../shared/models/Button.model ';
import { TextArea } from '../../shared/models/text-area.model';
import { ControlComponent } from '../control/control.component';
import { IControl } from '../../shared/interfaces/IControl.interface';
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-builder',
  imports: [ControlComponent, SideMenuComponent, CommonModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent implements AfterViewInit{
  formControlsInput = input.required<Control[]>();
  formControls: IControl[] = [];
  selectedControl?: IControl;

  private cdr = inject(ChangeDetectorRef);

  ngAfterViewInit(): void {
    this.formControls = this.castControls(this.formControlsInput());
    this.cdr.detectChanges();
    window.onclick = this.resetSelectedControl.bind(this);
  }

  private castControls(controls: Control[]): IControl[] {
    return controls.map((control) => {
      switch (control.type) {
        case 'textbox':
          const textbox = control as TextBox;
          return new TextBox(control.id, control.name, textbox.border, textbox.placeholder);
        case 'button':
          const button = control as Button;
          return new Button(button.id, button.name, button.border, button.caption);
          case 'textarea':
          const textarea = control as TextArea;
          return new TextArea(control.id, control.name, textarea.border, textarea.rows, textarea.columns);
        default:
          throw new Error('Control type not supported');
      }
    })
  }


  control_click(control: IControl, event: MouseEvent): void {
    event.stopPropagation();
    this.selectedControl = control;
  }

  sideMenu_click(event: MouseEvent): void {
    event.stopPropagation();
  }

  resetSelectedControl(): void {
    this.selectedControl = undefined;
  }
}
