import type { Species } from './Species';

export interface SpacecraftClass {
  name: string;
  crew: number;
  activeFrom: string;
  activeTo: string;
  species: Species;
}
