import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeWidgetComponent } from './real-time-widget.component';

describe('RealTimeWidgetComponent', () => {
  let component: RealTimeWidgetComponent;
  let fixture: ComponentFixture<RealTimeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealTimeWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
