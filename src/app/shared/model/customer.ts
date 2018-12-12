import {Order} from './order';
import {User} from "./user";

export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: number;
  email: string;
  orders?: Order[];
  userId: number;
  user?: User;
}
