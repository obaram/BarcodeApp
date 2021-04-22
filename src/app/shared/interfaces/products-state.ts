import {Product} from "./product";

export interface ProductsState {
  item: Product;
  scanHistory: Product[]
}
