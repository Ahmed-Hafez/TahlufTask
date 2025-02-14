import { Component, input, SimpleChanges } from '@angular/core';
import { IControl } from '../../shared/interfaces/IControl.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  imports: [FormsModule, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  control = input<IControl>();
  controlOptions: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.control()) {
      this.controlOptions = Object.keys(this.control()!).filter((key) => key !== 'type');
    } else {
      this.controlOptions = [];
    }
    console.log(this.controlOptions);
  }

  onModelChange(event: any, option: string): void {
    console.log(event);
    console.log(option);

    (this.control() as any)[option] = event;
  }

  onInputChange(event: any) {
    event.stopPropagation()
    console.log('input changed');
    return false
  }
}
