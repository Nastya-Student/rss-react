export interface Species {
  uid: string;
  name: string;
  homeworld: {
    uid: string;
    name: string;
  };
  quadrant: string;
  extinctSpecies: boolean;
  warpCapableSpecies: boolean;
  extraGalacticSpecies: boolean;
  humanoidSpecies: boolean;
  reptilianSpecies: boolean;
  avianSpecies: boolean;
  nonCorporealSpecies: boolean;
  shapeshiftingSpecies: boolean;
  spaceborneSpecies: boolean;
  telepathicSpecies: boolean;
  transDimensionalSpecies: boolean;
  unnamedSpecies: boolean;
  alternateReality: boolean;
}
