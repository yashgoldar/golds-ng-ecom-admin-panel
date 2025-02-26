import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAgGridDatatableComponent } from './server-ag-grid-datatable.component';

describe('ServerAgGridDatatableComponent', () => {
  let component: ServerAgGridDatatableComponent;
  let fixture: ComponentFixture<ServerAgGridDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerAgGridDatatableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerAgGridDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
