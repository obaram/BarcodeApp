import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductsService} from "../products.service";
import * as ProductsActions from "./procucts.actions";
import {catchError, delay, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class ProductsEffects {
  constructor(private actions: Actions, private productsService: ProductsService) {
  }

  $loadProducts = createEffect(() => this.actions.pipe(
    ofType(ProductsActions.loadProducts),
    switchMap((action) => this.productsService.getProduct(action.barcode)),
    delay(1000), // Http response simulation
    map((products) => ProductsActions.loadProductsSuccess({products})),
    catchError(() => of(ProductsActions.loadProductsError()))
  ))
}
