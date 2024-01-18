import { Period } from '../utils/period';

export interface Job {
  title: string;
  period: Period;
  client: string;
  project: string;
  description: string;
  teamsAndMethods: string;
  tasks: string[];
  toolsAndTechnologies: string[];
}
