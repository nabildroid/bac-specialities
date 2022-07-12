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

export interface IProvider {
  allOptions: Option[];
  selectedOptions: Option[];
  setSelectedOptions(options: Option[]): void;

  degree: number;
  setDegree(degree: number): void;

  like(id: string): Promise<void>;

  suggested: Speciality[];
  suggest(): void;

  openSpeciality(id: string): Promise<void>;

  page: "details" | "specialites" | "filters";
}
