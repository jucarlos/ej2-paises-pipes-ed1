import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then( m => m.PipesModule ),
  },
  {
    path: 'paises',
    loadChildren: () => import('./paises/paises.module').then( m => m.PaisesModule )
  },
  {
    path: '**',
    redirectTo: 'pipes'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
