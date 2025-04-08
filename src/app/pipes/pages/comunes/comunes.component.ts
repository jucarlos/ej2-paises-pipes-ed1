import { Component } from '@angular/core';

@Component({
  selector: 'app-comunes',
  standalone: false,
  templateUrl: './comunes.component.html',
  styleUrl: './comunes.component.css'
})
export class ComunesComponent {

  public ciudad: string = 'TolEdO';
  public frase: string = 'en un lugar de la mancha';

  public hoy: Date = new Date();

  public precio: number = 175.36588;
  public numeroDecimales: number = 1578.3665988;

  

}
