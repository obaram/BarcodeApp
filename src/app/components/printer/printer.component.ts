import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/interfaces/product";

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrinterComponent {
  @Input() public items: Product[];
  @Input() public sum: number;
}
