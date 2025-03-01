import { Component, Directive, Input } from '@angular/core';
import { Button } from '../../../models/Button.model ';
import { CommonModule } from '@angular/common';
import { IControl } from '../../../interfaces/IControl.interface';
import { AbstractControlDirective } from '../../../directives/abstract-control/abstract-control.directive';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent extends AbstractControlDirective<Button> {
}
