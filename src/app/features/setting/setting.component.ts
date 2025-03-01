import { TextArea } from './../../shared/models/text-area.model';
import { Component, input, OnChanges, OnInit, SimpleChanges, Type, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { IControl } from '../../shared/interfaces/IControl.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AbstractSettingDirective } from '../../shared/directives/abstract-setting/abstract-setting.directive';

@Component({
  selector: 'app-setting',
  imports: [FormsModule, CommonModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent implements OnChanges{
  control = input.required<IControl>();
  controlSetting?: Type<AbstractSettingDirective<IControl>>;

  @ViewChild('customSettingContainer', { static: true, read: ViewContainerRef }) customSettingContainer?: ViewContainerRef;

  ngOnChanges(changes: SimpleChanges): void {
    this.customSettingContainer?.clear();
    this.controlSetting = this.control().getControlSetting();
    const componentRef = this.customSettingContainer?.createComponent(this.controlSetting);
    componentRef?.setInput('control', this.control());
  }
}
