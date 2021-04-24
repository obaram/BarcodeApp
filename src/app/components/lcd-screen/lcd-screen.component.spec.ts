import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcdScreenComponent } from './lcd-screen.component';

describe('LcdScreenComponent', () => {
  let component: LcdScreenComponent;
  let fixture: ComponentFixture<LcdScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcdScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LcdScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
