import { BASE_URL, ITEMS } from '../constants';

import type {
  AnimalResponse,
  AppResponse,
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

type RequestProps = {
  listName: string;
  pageNumber?: number;
  name?: string;
};

export const getItems = async (props: RequestProps): Promise<AppResponse> => {
  const values: AppResponse = await getSpecificResponse(props);
  return values;
};

export const getResponse = async (props: RequestProps): Promise<Response> => {
  const data = await fetch(
    `${BASE_URL}${createEndpoint(props.listName)}/search?pageNumber=${props.pageNumber ?? 0}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `title=${props.name ?? ''}&name=${props.name ?? ''}`,
    }
  );
  return data;
};

export const getSpecificResponse = async (
  props: RequestProps
): Promise<AppResponse> => {
  const response: unknown = await (await getResponse(props)).json();

  switch (props.listName) {
    case ITEMS.animals:
      return getAnimals(response as AnimalResponse);
    case ITEMS.astronomicalObjects:
      return getAstronomicalObject(response as AstronomicalObjectResponse);
    case ITEMS.bookCollections:
      return getBookCollections(response as BookCollectionResponse);
    case ITEMS.bookSeries:
      return getBookSeries(response as BookSeriesResponse);
    case ITEMS.books:
      return getBooks(response as BookResponse);
    case ITEMS.characters:
      return getCharacters(response as CharacterResponse);
    case ITEMS.comicCollections:
      return getComicCollections(response as ComicCollectionResponse);
    case ITEMS.comicSeries:
      return getComicSeries(response as ComicSeriesResponse);
    case ITEMS.comicStrips:
      return getComicStrips(response as ComicStripResponse);
    case ITEMS.comics:
      return getComics(response as ComicResponse);
    case ITEMS.companies:
      return getCompanies(response as CompanyResponse);
    case ITEMS.conflicts:
      return getConflicts(response as ConflictsResponse);
    case ITEMS.elements:
      return getElements(response as ElementResponse);
    case ITEMS.episodes:
      return getEpisodes(response as EpisodeResponse);
    case ITEMS.foods:
      return getFoods(response as FoodResponse);
    case ITEMS.literaturePieces:
      return getLiteraturePieces(response as LiteraturePieceResponse);
    case ITEMS.locations:
      return getLocations(response as LocationResponse);
    case ITEMS.magazineSeries:
      return getMagazineSeries(response as MagazineSeriesResponse);
    case ITEMS.magazines:
      return getMagazines(response as MagazineResponse);
    case ITEMS.materials:
      return getMaterials(response as MaterialsResponse);
    case ITEMS.medicalConditions:
      return getMedicalConditions(response as MedicalConditionResponse);
    case ITEMS.movies:
      return getMovies(response as MovieResponse);
    case ITEMS.occupations:
      return getOccupations(response as OccupationResponse);
    case ITEMS.organizations:
      return getOrganizations(response as OrganizationResponse);
    case ITEMS.performers:
      return getPerformers(response as PerformerResponse);
    case ITEMS.seasons:
      return getSeasons(response as SeasonResponse);
    case ITEMS.series:
      return getSeries(response as SeriesResponse);
    case ITEMS.soundtracks:
      return getSoundtracks(response as SoundtrackResponse);
    case ITEMS.spacecraftClasses:
      return getSpacecraftClasses(response as SpacecraftClassResponse);
    case ITEMS.spacecrafts:
      return getSpacecrafts(response as SpacecraftResponse);
    case ITEMS.species:
      return getSpecies(response as SpeciesResponse);
    case ITEMS.staffMembers:
      return getStaffMembers(response as StaffMemberResponse);
    case ITEMS.technologyPieces:
      return getTechnologyPieces(response as TechnologyPieceResponse);
    case ITEMS.titles:
      return getTitles(response as TitleResponse);
    case ITEMS.tradingCardDecks:
      return getTradingCardDecks(response as TradingCardDecksResponse);
    case ITEMS.tradingCardSets:
      return getTradingCardSets(response as TradingCardSetResponse);
    case ITEMS.tradingCards:
      return getTradingCards(response as TradingCardResponse);
    case ITEMS.videoGames:
      return getVideoGames(response as VideoGameResponse);
    case ITEMS.videoReleases:
      return getVideoReleases(response as VideoReleaseResponse);
    case ITEMS.weapons:
      return getWeapons(response as WeaponResponse);
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
    return 'comics';
  }
  if (listName === ITEMS.comicSeries) {
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

const getResponseItems = <
  T extends { uid?: string; name?: string; title?: string },
>(
  data: T[]
): ResponseItem[] => {
  const values: ResponseItem[] = [];
  data.forEach((item) => {
    const value: ResponseItem = {
      name: '',
      description: [],
      uid: item.uid ?? '',
    };
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
  return key
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase();
};

const getAnimals = (response: AnimalResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.animals);
  return appResponse;
};

const getAstronomicalObject = (
  response: AstronomicalObjectResponse
): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.astronomicalObjects);
  return appResponse;
};

const getBookCollections = (response: BookCollectionResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.bookCollections);
  return appResponse;
};

const getBooks = (response: BookResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.books);
  return appResponse;
};

const getBookSeries = (response: BookSeriesResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.bookSeries);
  return appResponse;
};

const getComics = (response: ComicResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.comics);
  return appResponse;
};

const getConflicts = (response: ConflictsResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.conflicts);
  return appResponse;
};

const getCharacters = (response: CharacterResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.characters);
  return appResponse;
};

const getComicCollections = (
  response: ComicCollectionResponse
): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.comicCollections);
  return appResponse;
};

const getCompanies = (response: CompanyResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.companies);
  return appResponse;
};

const getComicSeries = (response: ComicSeriesResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.comicSeries);
  return appResponse;
};

const getComicStrips = (response: ComicStripResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.comicStrips);
  return appResponse;
};

const getElements = (response: ElementResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.elements);
  return appResponse;
};

const getEpisodes = (response: EpisodeResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.episodes);
  return appResponse;
};

const getFoods = (response: FoodResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.foods);
  return appResponse;
};

const getLiteraturePieces = (
  response: LiteraturePieceResponse
): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.literature);
  return appResponse;
};

const getLocations = (response: LocationResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.locations);
  return appResponse;
};

const getMagazines = (response: MagazineResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.magazines);
  return appResponse;
};

const getMedicalConditions = (
  response: MedicalConditionResponse
): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.medicalConditions);
  return appResponse;
};

const getMovies = (response: MovieResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.movies);
  return appResponse;
};

const getMagazineSeries = (response: MagazineSeriesResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.magazineSeries);
  return appResponse;
};

const getMaterials = (response: MaterialsResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.materials);
  return appResponse;
};

const getOccupations = (response: OccupationResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.occupations);
  return appResponse;
};

const getOrganizations = (response: OrganizationResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.organizations);
  return appResponse;
};

const getPerformers = (response: PerformerResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.performers);
  return appResponse;
};

const getSeasons = (response: SeasonResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.seasons);
  return appResponse;
};

const getSpacecraftClasses = (
  response: SpacecraftClassResponse
): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.spacecraftClasses);
  return appResponse;
};

const getSeries = (response: SeriesResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.series);
  return appResponse;
};

const getSoundtracks = (response: SoundtrackResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.soundtracks);
  return appResponse;
};

const getSpecies = (response: SpeciesResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.species);
  return appResponse;
};

const getSpacecrafts = (response: SpacecraftResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.spacecrafts);
  return appResponse;
};

const getStaffMembers = (response: StaffMemberResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.staff);
  return appResponse;
};

const getTradingCards = (response: TradingCardResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.tradingCards);
  return appResponse;
};

const getTechnologyPieces = (
  response: TechnologyPieceResponse
): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.technology);
  return appResponse;
};

const getTitles = (response: TitleResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.titles);
  return appResponse;
};

const getTradingCardDecks = (
  response: TradingCardDecksResponse
): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.tradingCardDecks);
  return appResponse;
};

const getTradingCardSets = (response: TradingCardSetResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.tradingCardSets);
  return appResponse;
};

const getVideoGames = (response: VideoGameResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.videoGames);
  return appResponse;
};

const getVideoReleases = (response: VideoReleaseResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.videoReleases);
  return appResponse;
};

const getWeapons = (response: WeaponResponse): AppResponse => {
  const appResponse: AppResponse = {
    pageInfo: {
      pageNumber: response.page.pageNumber,
      totalPages: response.page.totalPages,
      firstPage: response.page.firstPage,
      lastPage: response.page.lastPage,
    },
    items: [],
  };
  appResponse.items = getResponseItems(response.weapons);
  return appResponse;
};
