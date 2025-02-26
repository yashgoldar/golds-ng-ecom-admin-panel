import { Component, inject } from '@angular/core';
import { AllCommunityModule, ModuleRegistry, RowSelectionOptions } from 'ag-grid-community';
// import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { CommonModule } from '@angular/common';
import { ClientAgGridDatatableComponent } from '../../../../libs/components/tables/client-ag-grid-datatable/client-ag-grid-datatable.component';
import { BreadcrumbsComponent } from '../../../../libs/components/utilities/breadcrumbs/breadcrumbs.component';
import { MockDataService } from '../../../../libs/services/mock-data.service';

// Register all Community features
// ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
    selector: 'app-list-products',
    imports: [BreadcrumbsComponent, CommonModule, ClientAgGridDatatableComponent],
    standalone: true,
    templateUrl: './list-products.component.html',
    styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {
    public rows: any[] = [];
    public columnDefs: ColDef[] = [
        { field: 'id', headerName: 'ID', sortable: true, filter: true, width: 80 },
        { field: 'name', headerName: 'Product Name', sortable: true, filter: true },
        { field: 'category', headerName: 'Category', sortable: true, filter: true },
        { field: 'brand', headerName: 'Brand', sortable: true, filter: true },
        { field: 'price', headerName: 'Price ($)', sortable: true, filter: true },
        { field: 'stock', headerName: 'Stock', sortable: true, filter: true },
        { field: 'rating', headerName: 'Rating', sortable: true, filter: true },
        { field: 'date', headerName: 'Created At', sortable: true, filter: true }
    ];
    private __mockDataService = inject(MockDataService);

    constructor() {
        this.rows = this.__mockDataService.generateRowData(this.columnDefs, 200);
        console.log(' this.rowData', this.rows)
    }
}
