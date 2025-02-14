import { CommonModule } from '@angular/common';
import { TextBox } from '../../../models/text-box.model';
import { Control } from './../../../models/control.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-text-box',
  imports: [CommonModule],
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.scss'
})
export class TextBoxComponent {
  control?: TextBox;
}
