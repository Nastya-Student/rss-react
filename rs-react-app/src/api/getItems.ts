import type { AnimalResponse } from "./interfaces/Response";

export const getItems = async(listName: string):Promise<string[]> => {
  const result: string[] = [];
  const data = await fetch(`https://stapi.co/api/v1/rest/${listName}/search`);
  const response = (await data.json()) as AnimalResponse;

  response.animals.forEach(animal => {
    result.push(animal.name);
  });
  return result;
}


