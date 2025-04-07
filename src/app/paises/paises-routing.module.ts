import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { BuscarpaisComponent } from './pages/buscarpais/buscarpais.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'lista-paises',
        component: ListaComponent
      },
      {
        path: 'buscar-pais',
        component: BuscarpaisComponent
      },
      {
        path: '**',
        redirectTo: 'lista-paises'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
