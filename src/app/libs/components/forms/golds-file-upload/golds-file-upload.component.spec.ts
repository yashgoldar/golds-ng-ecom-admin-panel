import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldsFileUploadComponent } from './golds-file-upload.component';

describe('GoldsFileUploadComponent', () => {
  let component: GoldsFileUploadComponent;
  let fixture: ComponentFixture<GoldsFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldsFileUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldsFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
