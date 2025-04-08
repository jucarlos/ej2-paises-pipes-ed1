import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-busqueda',
  standalone: false,
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent implements OnInit, OnDestroy {
  
 

  @Output()
  public onValue = new EventEmitter<string>;

  @Output()
  public onDebounce = new EventEmitter<string>;

  // Creamos un observable 
  private debouncer: Subject<string> = new Subject<string>;

  // Controlas subcripciones
  private debouncerSuscription?: Subscription;


  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
         debounceTime( 1000 )
    )
    .subscribe( ( resp ) => {

      this.onDebounce.emit(`Tienes que buscar ${resp}`);

    })
  }
  

  
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }



  onKeyPress( termino: string ): void {
    // console.log( termino );
    // this.onValue.emit ( termino );
    this.debouncer.next( termino );
  }

}
