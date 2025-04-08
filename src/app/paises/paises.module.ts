import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { BuscarpaisComponent } from './pages/buscarpais/buscarpais.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    ListaComponent,
    BuscarpaisComponent,
    TablaPaisesComponent,

  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    SharedModule
  ]
})
export class PaisesModule { }
