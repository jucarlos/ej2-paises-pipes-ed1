
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { map, Observable } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';
import { environment } from '../../../environments/environment.development';


@Injectable({
    providedIn: 'root'
})
export class PaisesService {

    // constructor( private http: HttpClient) { }

    private http = inject( HttpClient ) ;

    // Incorporar configuración http.

    obtenerPaises(): Observable<Country[]> {

        const url = environment.baseUrl;

        return this.http.get<RESTCountry[]>( url )
        .pipe(
            map( resp => CountryMapper.mapRestContryArrToCountryArr( resp ) )
        )
        ;
        
    }

    
}