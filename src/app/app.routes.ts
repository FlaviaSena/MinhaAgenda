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
  },  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./paginas/registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'interno',
    loadComponent: () => import('./paginas/interno/interno.page').then( m => m.InternoPage)
  },

];
