import { Component, inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { RESTCountry } from '../../interfaces/rest-country.interface';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {
  

  private paisesService = inject( PaisesService );


  public isLoading = false;
  public isErrores = false;

  public countries: Country[] = [];


  ngOnInit(): void {

    this.isLoading = true;
    this.paisesService.obtenerPaises().subscribe( mapperCountries => {
      console.log( mapperCountries );
      this.countries = mapperCountries;

      this.isLoading = false;
    });

    
    
  }



}
