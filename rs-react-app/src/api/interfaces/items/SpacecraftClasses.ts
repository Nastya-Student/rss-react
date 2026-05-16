import type { Species } from './Species';

export interface SpacecraftClass {
  uid: string;
  name: string;
  numberOfDecks: string;
  crew: string;
  warpCapable: boolean;
  mirror: boolean;
  alternateReality: boolean;
  activeFrom: string;
  activeTo: string;
  species: Species;
}
