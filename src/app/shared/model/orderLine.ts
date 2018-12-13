import {Drone} from './drone';
import {Order} from './order';

export class OrderLine {

  droneId?: number;
  drone?: Drone;

  orderId?: number;
  order?: Order;

  qty?: number;
  boughtPrice?: number;
}
