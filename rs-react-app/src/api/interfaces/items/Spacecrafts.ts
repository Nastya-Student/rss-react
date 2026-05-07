import type { SpacecraftClass } from "./SpacecraftClasses";

export interface Spacecraft {
  name:  string,
  registry:  string,
  status:  string,
  dateStatus:  string,
  spacecraftClass: SpacecraftClass,
}