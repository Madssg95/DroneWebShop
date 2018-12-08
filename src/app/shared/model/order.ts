import {Customer} from './customer';
import {OrderLine} from './orderLine';

export class Order {

  id: number;
  orderDate: Date;
  customer: Customer;
  orderLines: OrderLine[];


}
