import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
  },
  {
    path: 'products',
    loadChildren: () => import('./products/product.routes').then(m => m.PRODUCTS_ROUTES),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
