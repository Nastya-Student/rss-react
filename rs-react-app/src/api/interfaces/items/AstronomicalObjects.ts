export interface AstronomicalObject {
  uid: string;
  name: string;
  astronomicalObjectType: string;
  location: {
    uid: string;
    name: string;
  };
}
