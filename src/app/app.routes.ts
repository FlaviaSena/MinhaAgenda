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
  {
    path: 'contatos',
    loadComponent: () => import('./paginas/contatos/contatos.page').then( m => m.ContatosPage)
  },
  {
    path: 'contatos',
    loadComponent: () => import('./paginas/contatos/contatos.page').then( m => m.ContatosPage)
  },
  {
    path: 'incluirtarefa',
    loadComponent: () => import('./paginas/incluirtarefa/incluirtarefa.page').then( m => m.IncluirtarefaPage)
  },
  {
    path: 'tarefas',
    loadComponent: () => import('./paginas/tarefas/tarefas.page').then( m => m.TarefasPage)
  },
];
