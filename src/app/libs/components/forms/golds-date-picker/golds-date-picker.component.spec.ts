import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldsDatePickerComponent } from './golds-date-picker.component';

describe('GoldsDatePickerComponent', () => {
  let component: GoldsDatePickerComponent;
  let fixture: ComponentFixture<GoldsDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldsDatePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldsDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
