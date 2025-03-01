import { AfterViewInit, Component, input, ViewChild, ViewContainerRef } from '@angular/core';
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
    const compRef = this.controlContainer!.createComponent(this.control().getControlComponent());
    compRef.instance.control = this.control();
  }
}
