import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiMetricComponent } from './kpi-metric.component';

describe('KpiMetricComponent', () => {
  let component: KpiMetricComponent;
  let fixture: ComponentFixture<KpiMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiMetricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
