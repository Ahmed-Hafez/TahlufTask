import { Directive, Input } from '@angular/core';
import { IControl } from '../../interfaces/IControl.interface';

@Directive({
  selector: '[appAbstractControl]'
})
export class AbstractControlDirective<T extends IControl> {
  @Input({required: true}) control!: T;
}
