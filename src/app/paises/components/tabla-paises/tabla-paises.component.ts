import { Component, input, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'paises-tabla-paises',
  standalone: false,
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent {

  // forma tradicional
  // @Input()
  // public countries: Country[] = []

  // en base a señales
  public countries = input.required<Country[]>();

  



}
