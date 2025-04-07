import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { ComunesComponent } from './pages/comunes/comunes.component';
import { NocomunesComponent } from './pages/nocomunes/nocomunes.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ComunesComponent,
    NocomunesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
