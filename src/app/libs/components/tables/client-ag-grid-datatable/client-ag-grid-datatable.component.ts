import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AllCommunityModule, ModuleRegistry, RowSelectionOptions } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { CommonModule } from '@angular/common';
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-client-ag-grid-datatable',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './client-ag-grid-datatable.component.html',
  styleUrl: './client-ag-grid-datatable.component.scss',
  // encapsulation: ViewEncapsulation.None
})
export class ClientAgGridDatatableComponent {
  @Input() columnDefs: ColDef[] = [];
  @Input() rowData: any[] = [];
  @Input() rowSelection: 'single' | 'multiple' = 'multiple';

  gridOptions = {
    pagination: true
  };
}
