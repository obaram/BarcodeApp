import {Component, OnDestroy, OnInit} from "@angular/core";
import {Product} from "../../shared/interfaces/product";
import {Action, Store} from "@ngrx/store";
import {ProductsService} from "./products.service";
import {Observable, Subscription} from "rxjs";
import {geProduct, getHistory, getSum, isLoading} from "./state/products.selector";
import {AppState} from "../../shared/interfaces/app-state";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public history$: Observable<Product[]>;
  public items$: Observable<Product[]> = this.store.select(geProduct);
  public isLoading$: Observable<boolean> = this.store.select(isLoading);
  public sum$: Observable<number>;

  public subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>, private productService: ProductsService) {
  }

  public ngOnInit(): void {
    this.subscription.add(this.productService.exit.subscribe(() => {
      this.history$ = this.store.select(getHistory);
      this.sum$ = this.store.select(getSum);
    }));
  }

  public onAction($event: Action): void {
    this.store.dispatch($event);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

