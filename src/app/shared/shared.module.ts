import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


@NgModule({
  declarations: [
    NavbarComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    BusquedaComponent
  ]
})
export class SharedModule { }
