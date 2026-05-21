import type { Animal } from './items/Animals';
import type { AstronomicalObject } from './items/AstronomicalObjects';
import type { BookCollection } from './items/BookCollections';
import type { Book } from './items/Books';
import type { BookSeries } from './items/BookSeries';
import type { Character } from './items/Characters';
import type { ComicCollection } from './items/ComicCollections';
import type { Comic } from './items/Comics';
import type { ComicSeries } from './items/ComicSeries';
import type { ComicStrip } from './items/ComicStrips';
import type { Company } from './items/Companies';
import type { Conflict } from './items/Conflicts';
import type { Episode } from './items/Episodes';
import type { Food } from './items/Foods';
import type { LiteraturePiece } from './items/LiteraturePieces';
import type { Magazine } from './items/Magazines';
import type { MagazineSeries } from './items/MagazineSeries';
import type { Materials } from './items/Materials';
import type { MedicalCondition } from './items/MedicalConditions';
import type { Movie } from './items/Movies';
import type { Occupation } from './items/Occupations';
import type { Organization } from './items/Organizations';
import type { Performer } from './items/Performers';
import type { Season } from './items/Seasons';
import type { Series } from './items/Series';
import type { Soundtrack } from './items/Soundtracks';
import type { SpacecraftClass } from './items/SpacecraftClasses';
import type { Spacecraft } from './items/Spacecrafts';
import type { Species } from './items/Species';
import type { StaffMember } from './items/StaffMembers';
import type { TechnologyPiece } from './items/TechnologyPieces';
import type { Title } from './items/Titles';
import type { TradingCardDecks } from './items/TradingCardDecks';
import type { TradingCard } from './items/TradingCards';
import type { TradingCardSet } from './items/TradingCardSets';
import type { VideoGame } from './items/VideoGames';
import type { VideoRelease } from './items/VideoReleases';
import type { Weapon } from './items/Weapons';
import type { ElementI } from './items/Elements';
import type { LocationI } from './items/Locations';

export type ResponseItem = {
  uid: string;
  name: string;
  description: string[];
};

export type ResponsePage = {
  pageNumber: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
};

export type AppResponse = {
  pageInfo: ResponsePage;
  items: ResponseItem[];
};

export type Page = {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
};

export type Sort = {
  clauses: number[];
};

export interface CommonResponse<T> {
  page: Page;
  sort: Sort;
  items: T[];
}

export interface AnimalResponse {
  page: Page;
  sort: Sort;
  animals: Animal[];
}

export interface AstronomicalObjectResponse {
  page: Page;
  sort: Sort;
  astronomicalObjects: AstronomicalObject[];
}

export interface BookCollectionResponse {
  page: Page;
  sort: Sort;
  bookCollections: BookCollection[];
}

export interface BookResponse {
  page: Page;
  sort: Sort;
  books: Book[];
}

export interface BookSeriesResponse {
  page: Page;
  sort: Sort;
  bookSeries: BookSeries[];
}

export interface CharacterResponse {
  page: Page;
  sort: Sort;
  characters: Character[];
}

export interface ComicCollectionResponse {
  page: Page;
  sort: Sort;
  comicCollections: ComicCollection[];
}

export interface ComicResponse {
  page: Page;
  sort: Sort;
  comics: Comic[];
}

export interface ComicSeriesResponse {
  page: Page;
  sort: Sort;
  comicSeries: ComicSeries[];
}

export interface ComicStripResponse {
  page: Page;
  sort: Sort;
  comicStrips: ComicStrip[];
}

export interface CompanyResponse {
  page: Page;
  sort: Sort;
  companies: Company[];
}

export interface ConflictsResponse {
  page: Page;
  sort: Sort;
  conflicts: Conflict[];
}

export interface ElementResponse {
  page: Page;
  sort: Sort;
  elements: ElementI[];
}

export interface EpisodeResponse {
  page: Page;
  sort: Sort;
  episodes: Episode[];
}

export interface FoodResponse {
  page: Page;
  sort: Sort;
  foods: Food[];
}

export interface LiteraturePieceResponse {
  page: Page;
  sort: Sort;
  literature: LiteraturePiece[];
}

export interface LocationResponse {
  page: Page;
  sort: Sort;
  locations: LocationI[];
}

export interface MagazineResponse {
  page: Page;
  sort: Sort;
  magazines: Magazine[];
}

export interface MagazineSeriesResponse {
  page: Page;
  sort: Sort;
  magazineSeries: MagazineSeries[];
}

export interface MaterialsResponse {
  page: Page;
  sort: Sort;
  materials: Materials[];
}

export interface MedicalConditionResponse {
  page: Page;
  sort: Sort;
  medicalConditions: MedicalCondition[];
}

export interface MovieResponse {
  page: Page;
  sort: Sort;
  movies: Movie[];
}

export interface OccupationResponse {
  page: Page;
  sort: Sort;
  occupations: Occupation[];
}

export interface OrganizationResponse {
  page: Page;
  sort: Sort;
  organizations: Organization[];
}

export interface PerformerResponse {
  page: Page;
  sort: Sort;
  performers: Performer[];
}

export interface SeasonResponse {
  page: Page;
  sort: Sort;
  seasons: Season[];
}

export interface SeriesResponse {
  page: Page;
  sort: Sort;
  series: Series[];
}

export interface SoundtrackResponse {
  page: Page;
  sort: Sort;
  soundtracks: Soundtrack[];
}

export interface SpacecraftClassResponse {
  page: Page;
  sort: Sort;
  spacecraftClasses: SpacecraftClass[];
}

export interface SpacecraftResponse {
  page: Page;
  sort: Sort;
  spacecrafts: Spacecraft[];
}

export interface SpeciesResponse {
  page: Page;
  sort: Sort;
  species: Species[];
}

export interface StaffMemberResponse {
  page: Page;
  sort: Sort;
  staff: StaffMember[];
}

export interface TechnologyPieceResponse {
  page: Page;
  sort: Sort;
  technology: TechnologyPiece[];
}

export interface TitleResponse {
  page: Page;
  sort: Sort;
  titles: Title[];
}

export interface TradingCardDecksResponse {
  page: Page;
  sort: Sort;
  tradingCardDecks: TradingCardDecks[];
}

export interface TradingCardResponse {
  page: Page;
  sort: Sort;
  tradingCards: TradingCard[];
}

export interface TradingCardSetResponse {
  page: Page;
  sort: Sort;
  tradingCardSets: TradingCardSet[];
}

export interface VideoGameResponse {
  page: Page;
  sort: Sort;
  videoGames: VideoGame[];
}

export interface VideoReleaseResponse {
  page: Page;
  sort: Sort;
  videoReleases: VideoRelease[];
}

export interface WeaponResponse {
  page: Page;
  sort: Sort;
  weapons: Weapon[];
}
