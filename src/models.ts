export type Option = {
  path: string;
  color?: string;
};

export type SpecialityDimension = {
  id: string;
  dimensions: number[];
};

export interface Speciality extends SpecialityDimension {
  id: string;
  title: string;
  image: string;
  dugree: number;
  region: { id: number; name: string };

  options: Option[];

  likes?: number;
}

export interface IAppProvider {
  allOptions: Option[];
  selectedOptions: Option[];
  toggleOption(type: string, name: string): void;

  degree: number;
  setDegree(degree: number): void;

  like(speciality: Speciality): Promise<void>;

  suggested: Speciality[];
  suggest(): void;
  
  openSpeciality(speciality: Speciality): Promise<void>;
  
  page: "details" | "specialites" | "filters";
  
  selelctedSpeciality?: Speciality;
  recommended: Speciality[];
}
