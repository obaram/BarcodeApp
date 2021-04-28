import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {Action} from "@ngrx/store";
import {loadProducts} from "../../views/products/state/procucts.actions";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-barcode-reader',
  templateUrl: './barcode-reader.component.html',
  styleUrls: ['./barcode-reader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarcodeReaderComponent implements OnInit, OnDestroy {

  @Output() onAction: EventEmitter<Action> = new EventEmitter<Action>();
  @Output() exit: EventEmitter<void> = new EventEmitter<void>();

  public subscription: Subscription = new Subscription();
  public closed = false;
  public barcodeControl = new FormControl();

  public ngOnInit(): void {
    this.subscription.add(this.barcodeControl.valueChanges.pipe(debounceTime(1000)).subscribe((barcode) => {
      this.onAction.emit(loadProducts({barcode}))
    }));
  }

  public close() {
    this.exit.emit();
    this.barcodeControl.disable({emitEvent: false});
    this.closed = true;
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
