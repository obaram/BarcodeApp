import {ProductsState} from "../../../shared/interfaces/products-state";
import {Action, createReducer, on} from "@ngrx/store";
import * as ProductsActions from './procucts.actions'

export const initialState: ProductsState = {
  items: [],
  history: [],
  pending: false
}

const reducer = createReducer(initialState,
  on(ProductsActions.loadProducts, (state: ProductsState) => ({...state, items: [], pending: true})),
  on(ProductsActions.loadProductsSuccess, (state: ProductsState, {products}) => ({
    ...state,
    items: products,
    pending: false,
    history: products.length && !state.history.some((product) => product.barcode === products[0].barcode) ? [...state.history.concat(products)] : [...state.history]
  })));


export function productsReducer(state: ProductsState, action: Action): ProductsState {
  return reducer(state, action);
}

