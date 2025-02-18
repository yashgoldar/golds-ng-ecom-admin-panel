import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldsInputComponent } from './golds-input.component';

describe('GoldsInputComponent', () => {
  let component: GoldsInputComponent;
  let fixture: ComponentFixture<GoldsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldsInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
