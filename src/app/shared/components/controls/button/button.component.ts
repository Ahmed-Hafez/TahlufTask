import { Component } from '@angular/core';
import { Button } from '../../../models/Button.model ';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  control?: Button;

}
