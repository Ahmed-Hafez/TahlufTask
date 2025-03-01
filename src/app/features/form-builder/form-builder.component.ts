import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  input,
} from '@angular/core';
import { Control } from '../../shared/models/control.model';
import { TextBox } from '../../shared/models/text-box.model';
import { Button } from '../../shared/models/Button.model ';
import { TextArea } from '../../shared/models/text-area.model';
import { ControlComponent } from '../control/control.component';
import { IControl } from '../../shared/interfaces/IControl.interface';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CommonModule } from '@angular/common';
import { controlFactory } from '../../shared/factories/control.factory';

@Component({
  selector: 'app-form-builder',
  imports: [ControlComponent, SideMenuComponent, CommonModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss',
})
export class FormBuilderComponent implements AfterViewInit {
  formControlsInput = input.required<IControl[]>();
  formControls: IControl[] = [];
  selectedControl?: IControl;

  private cdr = inject(ChangeDetectorRef);

  ngAfterViewInit(): void {
    this.formControls = this.castControls(this.formControlsInput());
    this.cdr.detectChanges();
    window.onclick = this.resetSelectedControl.bind(this);
  }

  private castControls(controls: IControl[]): IControl[] {
    return controls.map((control) => {
      const createControl = controlFactory[control.type];
      if (!createControl) throw new Error('Control type not supported');
      return createControl(control);
    });
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
