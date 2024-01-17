import { Address } from '../utils/address';
import { Period } from '../utils/period';

export interface Experience {
  title: string;
  company?: string;
  address: Address;
  date: Period;
  tasks: string[];
}
