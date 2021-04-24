import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductsService} from "../products.service";
import * as ProductsActions from "./procucts.actions";
import {debounceTime, map, switchMap} from "rxjs/operators";

@Injectable()
export class ProductsEffects {
  constructor(private actions: Actions, private productsService: ProductsService) {
  }

  $loadProducts = createEffect(() => this.actions.pipe(
    ofType(ProductsActions.loadProducts),
    switchMap((action) => this.productsService.getProduct(action.barcode)),
    debounceTime(1000),
    map((products) => ProductsActions.loadProductsSuccess({products}))
  ))
}
