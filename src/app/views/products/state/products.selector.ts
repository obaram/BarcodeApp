import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductsState} from "../../../shared/interfaces/products-state";


export const getProductsState = createFeatureSelector<ProductsState>('products');

export const geProduct = createSelector(getProductsState, (state: ProductsState) => {
  return state.items;
});

export const isLoading = createSelector(getProductsState, (state: ProductsState) => {
  return state.pending;
})

export const getHistory = createSelector(getProductsState, (state: ProductsState) => {
  return state.history;
})

export const getSum = createSelector(getProductsState, (state: ProductsState) => {
  return state.history.reduce((acc, item) => {return acc + item.price}, 0);
})
