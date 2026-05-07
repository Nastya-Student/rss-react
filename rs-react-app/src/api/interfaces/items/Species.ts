export interface Species {
  name:  string,
  homeworld: {
    name: string,
  }
  
  quadrant: {
    name: string,
  }
  
  humanoidSpecies:  boolean,
  unnamedSpecies:  boolean 
}