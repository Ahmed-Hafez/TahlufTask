import { Border } from './border.model';

export interface Control {
  type: string;
  id: string;
  name: string;
  border?: Border;
}
