import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAgGridDatatableComponent } from './client-ag-grid-datatable.component';

describe('ClientAgGridDatatableComponent', () => {
  let component: ClientAgGridDatatableComponent;
  let fixture: ComponentFixture<ClientAgGridDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAgGridDatatableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAgGridDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
