import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { BuscarpaisComponent } from './pages/buscarpais/buscarpais.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListaComponent,
    BuscarpaisComponent,

  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
