import { Component, inject } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-buscarpais',
  standalone: false,
  templateUrl: './buscarpais.component.html',
  styleUrl: './buscarpais.component.css'
})
export class BuscarpaisComponent {

  private paisesService = inject(PaisesService);

  public isLoading = false;
  public isError = false;
  public countries: Country[] = [];

  buscarPaisPorCapital(termino: string ) {

      this.isLoading = true;

      this.paisesService.buscarPaisesPorCapital( termino )
      .subscribe ( resp => {

        
        this.countries = resp;
        console.log( resp );
        this.isLoading = false;

       });




       
  }




}
