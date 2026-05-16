export interface Character {
  uid: string;
  name: string;
  gender: number;
  yearOfBirth: number;
  monthOfBirth: number;
  dayOfBirth: number;
  placeOfBirth: number;
  yearOfDeath: number;
  monthOfDeath: number;
  dayOfDeath: number;
  placeOfDeath: number;
  height: number;
  weight: number;
  deceased: number;
  bloodType: number;
  maritalStatus: number;
  serialNumber: number;
  hologramActivationDate: number;
  hologramStatus: number;
  hologramDateStatus: number;
  hologram: boolean;
  fictionalCharacter: boolean;
  mirror: boolean;
  alternateReality: boolean;
}
