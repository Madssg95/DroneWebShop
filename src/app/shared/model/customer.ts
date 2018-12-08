import {Order} from './order';

export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: number;
  email: string;
  orders?: Order[];
}
