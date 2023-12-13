import { ParsedQs } from 'qs';

export type Pizza = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category?: number;
  rating?: number;
};

export type NewPizza = {
  name: string;
  price: number;
  imageUrl: string;
  id: string;
  crustType: string;
  pizzaSize: number;
  count?: number;
};

export type WindowsLocationParams =
  | string
  | ParsedQs
  | string[]
  | ParsedQs[]
  | undefined;

export interface SetPizzaParams {
  activeIndex: number;
  finalSortChoice: string | undefined;
  finalOrder: string | undefined;
  filter: string;
  selectedPage: number;
}
