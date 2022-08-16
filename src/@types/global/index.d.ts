export interface GlobalContextType {
  curMenu: string;
  curMovieTab: string;
  changeMovieTab: (val: string) => void;
  changeMenu: (val: string) => void;
}
