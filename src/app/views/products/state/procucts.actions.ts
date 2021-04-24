import {createAction, props} from '@ngrx/store';
import {Product} from "../../../shared/interfaces/product";

const actionContext = ['PRODUCTS'];

export const loadProducts = createAction(`${actionContext} Load product`, props<{barcode: string}>());
export const loadProductsSuccess = createAction(`${actionContext} Load products success`, props<{products: Product[]}>());
