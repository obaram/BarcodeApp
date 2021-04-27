import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LcdScreenComponent} from './lcd-screen.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../shared/modules/material.module";

describe('LcdScreenComponent', () => {
  let component: LcdScreenComponent;
  let fixture: ComponentFixture<LcdScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LcdScreenComponent],
      imports: [FormsModule,
        ReactiveFormsModule,
        MaterialModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LcdScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render item when items is defined', () => {
    component.items = [{barcode: '000111', price: 50, name: 'test_case'}];
    const lcdScreen: HTMLElement = fixture.nativeElement;
    const item = lcdScreen.querySelector('.item');
    expect(item).toBeDefined();
  });

  it('should display "No products found..." when no items', () => {
    component.items = [];
    const lcdScreen: HTMLElement = fixture.nativeElement;
    const emptyContent = lcdScreen.querySelector('#empty-content');
    expect(emptyContent.textContent).toEqual('No products found...');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
