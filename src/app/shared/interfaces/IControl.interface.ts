import { Type } from "@angular/core";
import { Control } from "../models/control.model";

export interface IControl extends Control {
  getControlType(): Type<any>;
}
