export interface Organization {
  uid: string;
  name: string;
  government: boolean;
  intergovernmentalOrganization: boolean;
  researchOrganization: boolean;
  sportOrganization: boolean;
  medicalOrganization: boolean;
  militaryOrganization: boolean;
  militaryUnit: boolean;
  governmentAgency: boolean;
  lawEnforcementAgency: boolean;
  prisonOrPenalColony: boolean;
  mirror: boolean;
  alternateReality: boolean;
}
