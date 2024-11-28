import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab4',
        loadComponent: () => import('./settings/settings.page').then(m => m.SettingsPage)
      }
    ]
  }
];
