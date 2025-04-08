import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-country.interface";


export class CountryMapper {

    // transformas de restcountry a country
    static mapRestCountryToCountry( restCountry: RESTCountry) : Country {

        return {
            capital: restCountry.capital?.join(',') || '',
            cca2: restCountry.cca2,
            flagSvg: restCountry.flags.svg,
            name: restCountry.name.common,
            population: restCountry.population,
        }
    }

    // transforma el array
    static mapRestContryArrToCountryArr( restCountries: RESTCountry[] ): Country[] {

        return restCountries.map( ( restCountry ) => {
            return this.mapRestCountryToCountry( restCountry )
        })



    }




}