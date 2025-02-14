import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextArea } from '../../../models/text-area.model';

@Component({
  selector: 'app-text-area',
  imports: [CommonModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss'
})
export class TextAreaComponent {
  control?: TextArea;
}
