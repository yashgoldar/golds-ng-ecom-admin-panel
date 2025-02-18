import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFilterPanelComponent } from './advanced-filter-panel.component';

describe('AdvancedFilterPanelComponent', () => {
  let component: AdvancedFilterPanelComponent;
  let fixture: ComponentFixture<AdvancedFilterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedFilterPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedFilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
