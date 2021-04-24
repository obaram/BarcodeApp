import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/interfaces/product";

@Component({
  selector: 'app-lcd-screen',
  templateUrl: './lcd-screen.component.html',
  styleUrls: ['./lcd-screen.component.scss']
})
export class LcdScreenComponent {
  @Input() public items: Product[];
  @Input() public isLoading: boolean;
  @Input() public sum: number;
}
