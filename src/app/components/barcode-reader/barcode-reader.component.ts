import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {Action} from "@ngrx/store";
import {loadProducts} from "../../views/products/state/procucts.actions";
import {ProductsService} from "../../views/products/products.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-barcode-reader',
  templateUrl: './barcode-reader.component.html',
  styleUrls: ['./barcode-reader.component.scss']
})
export class BarcodeReaderComponent implements OnInit, OnDestroy {

  @Output() onAction: EventEmitter<Action> = new EventEmitter<Action>();

  public subscription: Subscription = new Subscription();
  public closed = false;
  public barcodeControl = new FormControl();

  constructor(private productsService: ProductsService) {
  }

  public ngOnInit(): void {
    this.subscription.add(this.barcodeControl.valueChanges.pipe(debounceTime(1000)).subscribe((barcode) => {
      this.onAction.emit(loadProducts({barcode}))
    }));
  }

  public close() {
    this.productsService.exit.next();
    this.barcodeControl.disable({emitEvent: false});
    this.closed = true;
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
