import { Component } from '@angular/core';

@Component({
  selector: 'app-buscarpais',
  standalone: false,
  templateUrl: './buscarpais.component.html',
  styleUrl: './buscarpais.component.css'
})
export class BuscarpaisComponent {

  buscarPaisPorCapital(termino: string ) {

       termino = termino + 'Estamos en el padre';
       console.log( 'Estamos en el padre: ', termino );
  }




}
