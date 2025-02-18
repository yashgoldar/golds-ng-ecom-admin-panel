import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldsSelectDropdownComponent } from './golds-select-dropdown.component';

describe('GoldsSelectDropdownComponent', () => {
  let component: GoldsSelectDropdownComponent;
  let fixture: ComponentFixture<GoldsSelectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldsSelectDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldsSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
