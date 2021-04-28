import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductsState} from "../../../shared/interfaces/products-state";

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const geProduct = createSelector(getProductsState, (state: ProductsState) => {
  return state ? state.items : null;
});

export const isLoading = createSelector(getProductsState, (state: ProductsState) => {
  return state ? state.pending : null;
})

export const getHistory = createSelector(getProductsState, (state: ProductsState) => {
  return state ? state.history : null;
})

export const getSum = createSelector(getProductsState, (state: ProductsState) => {
  return state ? state.history.reduce((sum, item) => {return sum + item.price}, 0) : null;
})
