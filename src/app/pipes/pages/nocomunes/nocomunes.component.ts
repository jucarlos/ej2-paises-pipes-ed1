import { Component } from '@angular/core';

enum Genero {
  Masculino = 'M',
  Femenino = 'F',
}

@Component({
  selector: 'app-nocomunes',
  standalone: false,
  templateUrl: './nocomunes.component.html',
  styleUrl: './nocomunes.component.css'
})
export class NocomunesComponent {

  public nombre: string = 'Luis';
  public genero: Genero = Genero.Masculino;

  public generoMap = {
    'M': 'bienvenido',
    'F': 'bienvenida',
  }

  public listaEspera: number = 5;

  public listaEsperaMap = {
    '=0': 'No hay personas esperando',
    '=1': 'Hay una persona esperando',
    'other': 'Hay # personas esperando',
  }

  public habitantes: number = 5;

  public habitantesMap = {
    '=0': 'No hay gente viviendo',
    '=1': 'Hay una persona viviendo',
    'other': 'Hay # personas viviendo',
  }


  bajarListaHabitantes(): void {

    if ( this.habitantes === 0 ) return;

    this.habitantes = this.habitantes - 1;


  }



  bajarLista(): void {

    if ( this.listaEspera === 0 ) return;

    this.listaEspera = this.listaEspera - 1;


  }









}
