import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComunesComponent } from './pages/comunes/comunes.component';
import { NocomunesComponent } from './pages/nocomunes/nocomunes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'comunes',
        component: ComunesComponent
      },
      {
        path: 'no-comunes',
        component: NocomunesComponent
      },
      {
        path: '**',
        redirectTo: 'comunes'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
