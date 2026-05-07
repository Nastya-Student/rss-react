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
  for (let i = 1; i < list.length; i += 1) {
    const word =
      list[i].substring(0, 1).toUpperCase() +
      list[i].substring(1, list[i].length);
    list[i] = word;
  }
  return list.join('').slice(0, -1);
};

const getAnimals = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as AnimalResponse;
    response.animals.forEach((animal) => {
      const animalValue: ResponseItem = {
        name: animal.name,
        description: [`earth animal: ${String(animal.earthAnimal)}`],
      };
      values.push(animalValue);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};

const getAstronomicalObject = async (
  listName: string
): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as AstronomicalObjectResponse;
    response.astronomicalObjects.forEach((astronomicalObject) => {
      //
      const value: ResponseItem = {
        name: astronomicalObject.name,
        description: [
          `type: ${String(astronomicalObject.astronomicalObjectType)}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};

const getBookCollections = async (
  listName: string
): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as BookCollectionResponse;
    response.bookCollections.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [
          `pages: ${String(item.numberOfPages)}`,
          `published year: ${item.publishedYear}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getBooks = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as BookResponse;
    response.books.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [
          `pages: ${String(item.numberOfPages)}`,
          `published year: ${item.publishedYear}`,
          `reference book: ${item.referenceBook}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};

const getBookSeries = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as BookSeriesResponse;
    response.bookSeries.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [
          `number of book: ${String(item.numberOfBooks)}`,
          `published year from: ${item.publishedYearFrom}`,
          `published year to: ${item.publishedYearTo}`,
          `published year from: ${item.miniseries}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};

const getComics = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as ComicResponse;
    response.comics.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [
          `pages: ${String(item.numberOfPages)}`,
          `published year: ${item.publishedYear}`,
          `stardata to: ${item.stardateTo}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};

const getConflicts = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as ConflictsResponse;
    response.conflicts.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [
          `earth conflict: ${String(item.earthConflict)}`,
          `year from: ${item.yearFrom}`,
          `year to: ${item.yearTo}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};

const getCharacters = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as CharacterResponse;
    response.characters.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [
          `gender: ${String(item.gender)}`,
          `alternate reality: ${item.alternateReality}`,
          `year of birth: ${item.yearOfBirth}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getComicCollections = async (
  listName: string
): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as ComicCollectionResponse;
    response.comicCollections.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [
          `pages: ${String(item.numberOfPages)}`,
          `published year: ${item.publishedYear}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getCompanies = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as CompanyResponse;
    response.companies.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [
          `collectible company: ${String(item.collectibleCompany)}`,
          `production company: ${item.productionCompany}`,
          `special effects company: ${item.specialEffectsCompany}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getComicSeries = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as ComicSeriesResponse;
    response.comicSeries.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [
          `miniseries: ${String(item.miniseries)}`,
          `number of issues: ${item.numberOfIssues}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getComicStrips = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as ComicStripResponse;
    response.comicStrips.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [
          `published year from: ${String(item.publishedYearFrom)}`,
          `published year to: ${item.publishedYearTo}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getElements = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as ElementResponse;
    response.elements.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [
          `atomic number: ${String(item.atomicNumber)}`,
          `atomic weight: ${item.atomicWeight}`,
          `symbol: ${item.symbol}`,
          `transonic series: ${item.transonicSeries}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getEpisodes = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as EpisodeResponse;
    response.episodes.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [
          `number: ${String(item.episodeNumber)}`,
          `season: ${item.season}`,
          `production serial number: ${item.productionSerialNumber}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getFoods = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as FoodResponse;
    response.foods.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [
          `earth only origin: ${String(item.earthlyOrigin)}`,
          `alcoholic beverage: ${item.alcoholicBeverage}`,
          `beverage: ${item.beverage}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getLiteraturePieces = async (
  listName: string
): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as LiteraturePieceResponse;
    response.literaturePieces.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [`earth only origin: ${String(item.earthlyOrigin)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getLocations = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as LocationResponse;
    response.locations.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [`alternate reality: ${String(item.alternateReality)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getMagazines = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as MagazineResponse;
    response.magazines.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [
          `pages: ${String(item.numberOfPages)}`,
          `published year: ${item.publishedYear}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getMedicalConditions = async (
  listName: string
): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as MedicalConditionResponse;
    response.medicalConditions.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [
          `psychological condition: ${String(item.psychologicalCondition)}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getMovies = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as MovieResponse;
    response.movies.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [`main direction: ${String(item.mainDirector)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getMagazineSeries = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as MagazineSeriesResponse;
    response.magazineSeries.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [
          `issues: ${String(item.numberOfIssues)}`,
          `published year from: ${item.publishedYearFrom}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getMaterials = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as MaterialsResponse;
    response.materials.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [
          `biochemical compound: ${String(item.biochemicalCompound)}`,
          `chemical compound: ${item.chemicalCompound}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getOccupations = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as OccupationResponse;
    response.occupations.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [
          `arts occupation: ${String(item.artsOccupation)}`,
          `entertainment occupation: ${item.entertainmentOccupation}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getOrganizations = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as OrganizationResponse;
    response.organizations.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [`alternate reality: ${String(item.alternateReality)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getPerformers = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as PerformerResponse;
    response.performers.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [
          `gender: ${String(item.gender)}`,
          `voy performer: ${item.voyPerformer}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getSeasons = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as SeasonResponse;
    response.seasons.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [`number: ${String(item.seasonNumber)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getSpacecraftClasses = async (
  listName: string
): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as SpacecraftClassResponse;
    response.spacecraftClasses.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [`crew: ${String(item.crew)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getSeries = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as SeriesResponse;
    response.series.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [`abbreviation: ${String(item.abbreviation)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getSoundtracks = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as SoundtrackResponse;
    response.soundtracks.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [`length: ${String(item.length)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getSpecies = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as SpeciesResponse;
    response.species.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [`humanoid species: ${String(item.humanoidSpecies)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getSpacecrafts = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as SpacecraftResponse;
    response.spacecrafts.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [`date status: ${String(item.dateStatus)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getStaffMembers = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as StaffMemberResponse;
    response.staffMembers.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [`author: ${String(item.author)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getTradingCards = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as TradingCardResponse;
    response.tradingCards.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [`number: ${String(item.number)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getTechnologyPieces = async (
  listName: string
): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as TechnologyPieceResponse;
    response.technologyPieces.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [`warp technology: ${String(item.warpTechnology)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getTitles = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as TitleResponse;
    response.titles.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [`mirror: ${String(item.mirror)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getTradingCardDecks = async (
  listName: string
): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as TradingCardDecksResponse;
    response.tradingCardDecks.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [`frequency: ${String(item.frequency)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getTradingCardSets = async (
  listName: string
): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as TradingCardSetResponse;
    response.tradingCardSets.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [`release year: ${String(item.releaseYear)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getVideoGames = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as VideoGameResponse;
    response.videoGames.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [`release date: ${String(item.releaseDate)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getVideoReleases = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as VideoReleaseResponse;
    response.videoReleases.forEach((item) => {
      const value: ResponseItem = {
        name: item.title,
        description: [`format: ${String(item.format)}`],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
const getWeapons = async (listName: string): Promise<ResponseItem[]> => {
  const values: ResponseItem[] = [];
  try {
    const response = (await (
      await getResponse(listName)
    ).json()) as WeaponResponse;
    response.weapons.forEach((item) => {
      const value: ResponseItem = {
        name: item.name,
        description: [
          `alternate reality: ${String(item.alternateReality)}`,
          `mirror: ${item.mirror}`,
        ],
      };
      values.push(value);
    });
  } catch (error) {
    console.error(error);
  }
  return values;
};
