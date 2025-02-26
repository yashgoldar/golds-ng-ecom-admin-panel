import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  // getColumnDefs(): ColDef[] {
  //   return [
  //     { field: 'id', headerName: 'ID', sortable: true, filter: true, width: 80 },
  //     { field: 'name', headerName: 'Product Name', sortable: true, filter: true },
  //     { field: 'category', headerName: 'Category', sortable: true, filter: true },
  //     { field: 'brand', headerName: 'Brand', sortable: true, filter: true },
  //     { field: 'price', headerName: 'Price ($)', sortable: true, filter: true },
  //     { field: 'stock', headerName: 'Stock', sortable: true, filter: true },
  //     { field: 'rating', headerName: 'Rating', sortable: true, filter: true },
  //     { field: 'createdAt', headerName: 'Added Date', sortable: true, filter: true }
  //   ];
  // }

  // getRowData(count: number = 200): any[] {
  //   return Array.from({ length: count }).map((_, index) => ({
  //     id: index + 1,
  //     name: `Product ${index + 1}`,
  //     category: ['Electronics', 'Fashion', 'Home Appliances', 'Sports', 'Beauty'][Math.floor(Math.random() * 5)],
  //     brand: ['Apple', 'Samsung', 'Sony', 'Nike', 'Adidas', 'Dell'][Math.floor(Math.random() * 6)],
  //     price: (Math.random() * 500 + 50).toFixed(2),
  //     stock: Math.floor(Math.random() * 500),
  //     rating: (Math.random() * 5).toFixed(1),
  //     createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0]
  //   }));
  // }

  generateRowData(columnDefs: ColDef[], rowCount: number = 100): any[] {
    return Array.from({ length: rowCount }).map((_, index) => {
      const row: any = {};
      columnDefs.forEach(col => {
        row[col.field!] = this.generateRandomValue(col.field!, index);
      });
      return row;
    });
  }

  private generateRandomValue(field: string, index: number): any {
    const lowerField = field.toLowerCase();

    if (lowerField.includes('id')) return index + 1;
    if (lowerField.includes('date')) return this.getRandomDate();
    if (lowerField.includes('createdAt')) return this.getRandomDate();
    // if (lowerField.includes('date')) return this.getRandomDate();
    if (lowerField.includes('count')) return this.getRandomNumber(1, 500);
    
    return this.getRandomText(); // Default case: random string
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getRandomText(): string {
    const words = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Theta', 'Omega'];
    return words[Math.floor(Math.random() * words.length)];
  }

  private getRandomDate(): string {
    const randomDate = new Date(Date.now() - Math.floor(Math.random() * 10000000000));
    return randomDate.toISOString().split('T')[0];
  }
}
