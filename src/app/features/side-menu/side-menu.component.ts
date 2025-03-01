import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { IControl } from '../../shared/interfaces/IControl.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/controls/button/button.component';
import { SettingComponent } from '../setting/setting.component';

@Component({
  selector: 'app-side-menu',
  imports: [FormsModule, CommonModule, SettingComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent implements OnChanges{
  control = input<IControl>();
  controlOptions: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.control()) {
      console.log('Control is ', this.control()?.type);
      this.controlOptions = Object.keys(this.control()!).filter((key) => key !== 'type');
    } else {
      this.controlOptions = [];
    }
  }

  onModelChange(event: any, option: string): void {
    console.log(option)
    // (this.control() as any)[option] = event;
  }

  onInputChange(event: any) {
    event.stopPropagation()
    console.log('input changed');
    return false
  }

  getOptionProperties(option: object | string): string[] {
    if(typeof option === 'object') {
      console.log(Object.keys(option))
      return Object.keys(option);
    } else {
      return [];
    }
  }
}
