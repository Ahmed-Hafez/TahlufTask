import { AfterViewInit, Component, ComponentRef, inject, input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TextBoxComponent } from '../../shared/components/controls/text-box/text-box.component';
import { Control } from '../../shared/models/control.model';
import { IControl } from '../../shared/interfaces/IControl.interface';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss'
})
export class ControlComponent implements AfterViewInit {
  @ViewChild('InputContainer', {read: ViewContainerRef}) controlContainer?: ViewContainerRef;
  control = input.required<IControl>()



  ngAfterViewInit(): void {
    const compRef = this.controlContainer!.createComponent(this.control().getControlType());
    compRef.instance.control = this.control();
  }
}
