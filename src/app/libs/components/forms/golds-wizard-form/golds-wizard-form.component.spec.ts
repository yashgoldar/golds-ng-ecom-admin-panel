import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldsWizardFormComponent } from './golds-wizard-form.component';

describe('GoldsWizardFormComponent', () => {
  let component: GoldsWizardFormComponent;
  let fixture: ComponentFixture<GoldsWizardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldsWizardFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldsWizardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
