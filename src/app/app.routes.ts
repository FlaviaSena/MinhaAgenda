import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'incluircontato',
    loadComponent: () => import('./paginas/incluircontato/incluircontato.page').then( m => m.IncluircontatoPage)
  },
];
