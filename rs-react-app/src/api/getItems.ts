import type { Animal } from "./interfaces/Animal";
import type { AnimalResponse } from "./interfaces/Response";

export const getItems = async(listName: string):Promise<string[]> => {
  const result: string[] = [];
  getAnimals(listName).then((item) => {
    item.forEach(element => {
      result.push(element.name);
    });
    
  })

  return result;
}


export const getAnimals = async(listName: string): Promise<Animal []> => {
  const data = await fetch("https://stapi.co/api/v1/rest/animal/search");
  const response = data.json() as unknown as AnimalResponse;
  console.log('response: ' + response)
  return response.animals;
}