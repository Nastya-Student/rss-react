import { BASE_URL, ITEMS } from "../constants";
import type { Animal } from "./interfaces/items/Animals";
import type { CommonResponse, ResponseItem } from "./interfaces/Response";

export const getItems = async(listName: string):Promise<ResponseItem []> => {
  const values: ResponseItem [] = await getSpecificResponse(listName);
  return values;
}


export const getResponse = async<T>(listName: string): Promise <CommonResponse<T>> => {
  const data = await fetch(`${BASE_URL}${listName.slice(0, -1)}/search`);
  const response = (await data.json()) as CommonResponse <T>;
  return response;
}


export const getSpecificResponse = async(listName: string): Promise<ResponseItem []> => {
  const values: ResponseItem [] = [];

  switch (listName) {
    case ITEMS.animals :
      try{
        const response = await getResponse<Animal>(listName);
        response.animals.forEach(animal => {
          const animalValue: ResponseItem = {
            name: animal.name,
            description:[
              `earth animal: ${String(animal.earthAnimal)}`,
            ]
          }
          values.push(animalValue)
        });
      }catch(error){
        console.error(error)
      };
      break;
      default:
        console.error('no such search item')
  }

  return values;
}

