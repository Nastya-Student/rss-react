import type { SpacecraftClass } from './SpacecraftClasses';

export interface Spacecraft {
  uid: string;
  name: string;
  registry: string;
  status: string;
  dateStatus: string;
  spacecraftClass: SpacecraftClass;
  owner: string;
  operator: string;
  affiliation: string;
}
