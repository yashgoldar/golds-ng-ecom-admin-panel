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
  {
    path: 'orders',
    loadChildren: () => import('./order-management/order-management.routes').then(m => m.ORDER_MANAGEMENT_ROUTES),
  },
  {
    path: 'customers',
    loadChildren: () => import('./customer-management/customer-management.routes').then(m => m.CUSTOMER_MANAGEMENT_ROUTES),
  },
  {
    path: 'marketing-promotions',
    loadChildren: () => import('./marketing-and-promotions/marketing-promotions.routes').then(m => m.MARKETING_PROMOTIONS_ROUTES),
  },
  {
    path: 'payments-transactions',
    loadChildren: () => import('./payment-and-transactions/payment-transactions.routes').then(m => m.PAYMENT_TRANSACTIONS_ROUTES),
  },
  {
    path: 'reports-analytics',
    loadChildren: () => import('./reports-and-analytics/reports-analytics.routes').then(m => m.REPORTS_ANALYTICS_ROUTES),
  },
  {
    path: 'settings-config',
    loadChildren: () => import('./settings-and-config/settings-config.routes').then(m => m.SETTING_CONFIG_ROUTES),
  },
  {
    path: 'content',
    loadChildren: () => import('./content-management/content-management.routes').then(m => m.CONTENT_MANAGEMENT_ROUTES),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
