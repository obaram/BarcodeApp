import {ActionReducerMap} from '@ngrx/store';
import * as fromProducts from '../views/products/state/products.reducer'
import {AppState} from "../shared/interfaces/app-state";

export const reducers: ActionReducerMap<AppState> = {
  products: fromProducts.productsReducer
};
