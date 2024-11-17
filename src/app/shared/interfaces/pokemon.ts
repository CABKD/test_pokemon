export interface Pokemon {
  category: string;
  pokedex_id: number;
  name: {
    fr: string;
    en: string;
    jp: string;
  };
  sprites: {
    regular: string;
    gmax: string;
    shiny: string;
  };
  types: [{ name: string; image: string }];
  height: number;
  weight: number;
}
