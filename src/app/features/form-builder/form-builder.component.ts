import { AfterViewInit, ChangeDetectorRef, Component, inject, input } from '@angular/core';
import { Control } from '../../shared/models/control.model';
import { TextBox } from '../../shared/models/text-box.model';
import { Button } from '../../shared/models/Button.model ';
import { TextArea } from '../../shared/models/text-area.model';
import { ControlComponent } from '../control/control.component';
import { IControl } from '../../shared/interfaces/IControl.interface';
import { SideMenuComponent } from "../side-menu/side-menu.component";

@Component({
  selector: 'app-form-builder',
  imports: [ControlComponent, SideMenuComponent],
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
          return new TextBox(control.id, control.name);
        case 'button':
          return new Button(control.id, control.name);
        case 'textarea':
          return new TextArea(control.id, control.name);
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
