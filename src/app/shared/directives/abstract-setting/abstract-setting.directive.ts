import { Directive, Input, input } from '@angular/core';
import { IControl } from '../../interfaces/IControl.interface';

@Directive({
  selector: '[appAbstractSetting]'
})
export abstract class AbstractSettingDirective<T extends IControl> {
  @Input({required: true}) control?: T;
}
