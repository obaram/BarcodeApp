import {Product} from "./product";

export interface ProductsState {
  items: Product[];
  history: Product[];
  pending: boolean;
}
