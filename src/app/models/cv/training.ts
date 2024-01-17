import { Address } from '../utils/address';
import { Period } from '../utils/period';

export interface Training {
  title: string;
  school: string;
  address: Address;
  date: Period;
}
