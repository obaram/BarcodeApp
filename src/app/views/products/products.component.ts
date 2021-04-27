import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Product} from "../../shared/interfaces/product";
import {Action, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {geProduct, getHistory, getSum, isLoading} from "./state/products.selector";
import {AppState} from "../../shared/interfaces/app-state";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {

  public history$: Observable<Product[]>;
  public items$: Observable<Product[]> = this.store.select(geProduct);
  public isLoading$: Observable<boolean> = this.store.select(isLoading);
  public sum$: Observable<number>;

  public constructor(private store: Store<AppState>) {
  }

  public onAction($event: Action): void {
    this.store.dispatch($event);
  }

  public handleExit() {
    this.history$ = this.store.select(getHistory);
    this.sum$ = this.store.select(getSum);
  }
}

