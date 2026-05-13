import { BASE_URL, ITEMS } from '../constants';

import type {
  AnimalResponse,
  AstronomicalObjectResponse,
  BookCollectionResponse,
  BookResponse,
  BookSeriesResponse,
  CharacterResponse,
  ComicCollectionResponse,
  ComicResponse,
  ComicSeriesResponse,
  ComicStripResponse,
  CompanyResponse,
  ConflictsResponse,
  ElementResponse,
  EpisodeResponse,
  FoodResponse,
  LiteraturePieceResponse,
  LocationResponse,
  MagazineResponse,
  MagazineSeriesResponse,
  MaterialsResponse,
  MedicalConditionResponse,
  MovieResponse,
  OccupationResponse,
  OrganizationResponse,
  PerformerResponse,
  ResponseItem,
  SeasonResponse,
  SeriesResponse,
  SoundtrackResponse,
  SpacecraftClassResponse,
  SpacecraftResponse,
  SpeciesResponse,
  StaffMemberResponse,
  TechnologyPieceResponse,
  TitleResponse,
  TradingCardDecksResponse,
  TradingCardResponse,
  TradingCardSetResponse,
  VideoGameResponse,
  VideoReleaseResponse,
  WeaponResponse,
} from './interfaces/Response';

export const getItems = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = await getSpecificResponse(listName);
  return values;
};

export const getResponse = async (listName: string): Promise<Response> => {
  const data = await fetch(`${BASE_URL}${createEndpoint(listName)}/search`);
  return data;
};

export const getSpecificResponse = async (
  listName: string
): Promise<ResponseItem[]> => {
  switch (listName) {
    case ITEMS.animals:
      return getAnimals(listName);
    case ITEMS.astronomicalObjects:
      return getAstronomicalObject(listName);
    case ITEMS.bookCollections:
      return getBookCollections(listName);
    case ITEMS.bookSeries:
      return getBookSeries(listName);
    case ITEMS.books:
      return getBooks(listName);
    case ITEMS.characters:
      return getCharacters(listName);
    case ITEMS.comicCollections:
      return getComicCollections(listName);
    case ITEMS.comicSeries:
      return getComicSeries(listName);
    case ITEMS.comicStrips:
      return getComicStrips(listName);
    case ITEMS.comics:
      return getComics(listName);
    case ITEMS.companies:
      return getCompanies(listName);
    case ITEMS.conflicts:
      return getConflicts(listName);
    case ITEMS.elements:
      return getElements(listName);
    case ITEMS.episodes:
      return getEpisodes(listName);
    case ITEMS.foods:
      return getFoods(listName);
    case ITEMS.literaturePieces:
      return getLiteraturePieces(listName);
    case ITEMS.locations:
      return getLocations(listName);
    case ITEMS.magazineSeries:
      return getMagazineSeries(listName);
    case ITEMS.magazines:
      return getMagazines(listName);
    case ITEMS.materials:
      return getMaterials(listName);
    case ITEMS.medicalConditions:
      return getMedicalConditions(listName);
    case ITEMS.movies:
      return getMovies(listName);
    case ITEMS.occupations:
      return getOccupations(listName);
    case ITEMS.organizations:
      return getOrganizations(listName);
    case ITEMS.performers:
      return getPerformers(listName);
    case ITEMS.seasons:
      return getSeasons(listName);
    case ITEMS.series:
      return getSeries(listName);
    case ITEMS.soundtracks:
      return getSoundtracks(listName);
    case ITEMS.spacecraftClasses:
      return getSpacecraftClasses(listName);
    case ITEMS.spacecrafts:
      return getSpacecrafts(listName);
    case ITEMS.species:
      return getSpecies(listName);
    case ITEMS.staffMembers:
      return getStaffMembers(listName);
    case ITEMS.technologyPieces:
      return getTechnologyPieces(listName);
    case ITEMS.titles:
      return getTitles(listName);
    case ITEMS.tradingCardDecks:
      return getTradingCardDecks(listName);
    case ITEMS.tradingCardSets:
      return getTradingCardSets(listName);
    case ITEMS.tradingCards:
      return getTradingCards(listName);
    case ITEMS.videoGames:
      return getVideoGames(listName);
    case ITEMS.videoReleases:
      return getVideoReleases(listName);
    case ITEMS.weapons:
      return getWeapons(listName);
    default:
      console.error('no such search item');
  }
  throw new Error();
};

const createEndpoint = (listName: string): string => {
  const list = listName.split(' ');
  if (listName === ITEMS.bookSeries) {
    return 'bookSeries';
  }
  if (listName === ITEMS.comics) {
    return 'comicSeries';
  }
  if (listName === ITEMS.companies) {
    return 'company';
  }
  if (listName === ITEMS.literaturePieces) {
    return 'literature';
  }
  if (listName === ITEMS.magazineSeries) {
    return 'magazineSeries';
  }
  if (listName === ITEMS.series) {
    return 'series';
  }
  if (listName === ITEMS.spacecraftClasses) {
    return 'spacecraftClass';
  }
  if (listName === ITEMS.species) {
    return 'species';
  }
  if (listName === ITEMS.staffMembers) {
    return 'staff';
  }
  if (listName === ITEMS.technologyPieces) {
    return 'technology';
  }
  for (let i = 1; i < list.length; i += 1) {
    const word =
      list[i].substring(0, 1).toUpperCase() +
      list[i].substring(1, list[i].length);
    list[i] = word;
  }
  return list.join('').slice(0, -1);
};

const getResponseItems = <T extends { name?: string; title?: string }>(
  data: T[]
): ResponseItem[] => {
  const values: ResponseItem[] = [];
  data.forEach((item) => {
    const value: ResponseItem = { name: '', description: [] };
    if (Object.keys(item).find((key) => key === 'name')) {
      if (!item.name) {
        throw new Error();
      }
      value.name = item.name;
    } else if (Object.keys(item).find((key) => key === 'title')) {
      if (!item.title) {
        throw new Error();
      }
      value.name = item.title;
    }
    value.description = invokeDescriptions(item);
    if (value.description.length == 0) {
      value.description = ['no description'];
    }
    values.push(value);
  });

  return values;
};

const invokeDescriptions = <T extends Record<string, unknown>>(
  item: T
): string[] => {
  return Object.entries(item)
    .filter(([, value]) => value)
    .filter(([key]) => key !== 'name' && key !== 'title' && key !== 'uid')
    .map(
      ([key, value]) =>
        `${splitKey(key)}: ${
          value instanceof Object
            ? ((value as { name?: string }).name ??
              (value as { title?: string }).title)
            : value
        }`
    );
};

const splitKey = (key: string): string => {
  return key.split(/(?=[A-Z])/).join(' ').toLowerCase();
} 

// const getAnimals = async (listName: string): Promise<ResponseItem[]> => {
//   try {
//     const response = (await (
//       await getResponse(listName)
//     ).json()) as AnimalResponse;
//     const property:Animal [] = Object.entries(response).filter(([k,]) => k !== 'sort' && k !== 'page').map(([, v]) => v);
//     console.log(property)
//     return getResponseItems(property);
//   } catch (error) {
//     console.error(error);
//   }
//   throw new Error();
// };

const getAnimals = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as AnimalResponse;
    return getResponseItems(response.animals);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getAstronomicalObject = async (
  listName: string
): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as AstronomicalObjectResponse;
    return getResponseItems(response.astronomicalObjects);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getBookCollections = async (
  listName: string
): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as BookCollectionResponse;
    return getResponseItems(response.bookCollections);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getBooks = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as BookResponse;
    return getResponseItems(response.books);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getBookSeries = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as BookSeriesResponse;
    return getResponseItems(response.bookSeries);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getComics = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as ComicResponse;
    return getResponseItems(response.comics);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getConflicts = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as ConflictsResponse;
    return getResponseItems(response.conflicts);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getCharacters = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as CharacterResponse;
    return getResponseItems(response.characters);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getComicCollections = async (
  listName: string
): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as ComicCollectionResponse;
    return getResponseItems(response.comicCollections);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getCompanies = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as CompanyResponse;
    return getResponseItems(response.companies);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getComicSeries = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as ComicSeriesResponse;
    return getResponseItems(response.comicSeries);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getComicStrips = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as ComicStripResponse;
    return getResponseItems(response.comicStrips);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getElements = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as ElementResponse;
    return getResponseItems(response.elements);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getEpisodes = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as EpisodeResponse;
    return getResponseItems(response.episodes);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getFoods = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as FoodResponse;
    return getResponseItems(response.foods);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getLiteraturePieces = async (
  listName: string
): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as LiteraturePieceResponse;
    return getResponseItems(response.literature);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getLocations = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as LocationResponse;
    return getResponseItems(response.locations);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getMagazines = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as MagazineResponse;
    return getResponseItems(response.magazines);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getMedicalConditions = async (
  listName: string
): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as MedicalConditionResponse;
    return getResponseItems(response.medicalConditions);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getMovies = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as MovieResponse;
    return getResponseItems(response.movies);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getMagazineSeries = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as MagazineSeriesResponse;
    return getResponseItems(response.magazineSeries);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getMaterials = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as MaterialsResponse;
    return getResponseItems(response.materials);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getOccupations = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as OccupationResponse;
    return getResponseItems(response.occupations);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getOrganizations = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as OrganizationResponse;
    return getResponseItems(response.organizations);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getPerformers = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as PerformerResponse;
    return getResponseItems(response.performers);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getSeasons = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as SeasonResponse;
    return getResponseItems(response.seasons);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getSpacecraftClasses = async (
  listName: string
): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as SpacecraftClassResponse;
    return getResponseItems(response.spacecraftClasses);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getSeries = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as SeriesResponse;
    return getResponseItems(response.series);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getSoundtracks = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as SoundtrackResponse;
    return getResponseItems(response.soundtracks);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getSpecies = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as SpeciesResponse;
    return getResponseItems(response.species);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getSpacecrafts = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as SpacecraftResponse;
    return getResponseItems(response.spacecrafts);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getStaffMembers = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as StaffMemberResponse;
    return getResponseItems(response.staff);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getTradingCards = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as TradingCardResponse;
    return getResponseItems(response.tradingCards);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getTechnologyPieces = async (
  listName: string
): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as TechnologyPieceResponse;
    return getResponseItems(response.technology);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getTitles = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as TitleResponse;
    return getResponseItems(response.titles);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getTradingCardDecks = async (
  listName: string
): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as TradingCardDecksResponse;
    return getResponseItems(response.tradingCardDecks);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getTradingCardSets = async (
  listName: string
): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as TradingCardSetResponse;
    return getResponseItems(response.tradingCardSets);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getVideoGames = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as VideoGameResponse;
    return getResponseItems(response.videoGames);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getVideoReleases = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as VideoReleaseResponse;
    return getResponseItems(response.videoReleases);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};

const getWeapons = async (listName: string): Promise<ResponseItem[]> => {
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as WeaponResponse;
    return getResponseItems(response.weapons);
  } catch (error) {
    console.error(error);
  }
  throw new Error();
};
