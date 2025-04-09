
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { catchError, map, Observable, of } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';
import { environment } from '../../../environments/environment.development';


@Injectable({
    providedIn: 'root'
})
export class PaisesService {

    // constructor( private http: HttpClient) { }

    private http = inject(HttpClient);

    private baseUrl: string = environment.baseUrl;


    // Incorporar configuración http.

    obtenerPaises(): Observable<Country[]> {

        const url = `${this.baseUrl}/all`;

        return this.http.get<RESTCountry[]>( url )
            .pipe(
                map(resp => CountryMapper.mapRestContryArrToCountryArr(resp))
            )
            ;
    }

    // https://restcountries.com/v3.1/capital/{capital}
    buscarPaisesPorCapital( query: string ): Observable<Country[]> {

        const url = `${this.baseUrl}/capital/${query}`;
        return this.http.get<RESTCountry[]>( url )
        .pipe(
            map(resp => CountryMapper.mapRestContryArrToCountryArr(resp)),
          
        );


    }


}