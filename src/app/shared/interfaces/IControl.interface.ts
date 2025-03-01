import { Type } from "@angular/core";
import { Control } from "../models/control.model";
import { AbstractSettingDirective } from "../directives/abstract-setting/abstract-setting.directive";
import { AbstractControlDirective } from "../directives/abstract-control/abstract-control.directive";

export interface IControl extends Control {
  getControlComponent(): Type<AbstractControlDirective<IControl>>;
  getControlSetting(): Type<AbstractSettingDirective<IControl>>;
}
