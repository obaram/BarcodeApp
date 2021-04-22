import {ProductsState} from "../../shared/interfaces/products-state";
import {Action, createReducer} from "@ngrx/store";

export const initialState: ProductsState = {
  item: null,
  scanHistory: []
}

const reducer = createReducer(initialState);

export function productsReducer(state: ProductsState, action: Action): ProductsState {
  return reducer(state, action);
}
