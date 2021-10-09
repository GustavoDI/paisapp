import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "http://api.countrylayer.com/v2";
  private API_KEY: string = "?access_key=d3a6fc85e8e54d3b2210e785c5646425";
  constructor(private http: HttpClient) { }

  // esta es la llamada de la petición
  buscarPais( termino:string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}${this.API_KEY}`;
    return this.http.get<Country[]>(url);

  }
  buscarCapital( termino:string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}${this.API_KEY}`;
    return this.http.get<Country[]>(url);

  }

  buscarPaisPorAlpha( id:string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}${this.API_KEY}`;
    return this.http.get<Country>(url);

  }

  buscarPorRegion(termino: string): Observable<Country[]>{

    const httpParams = new HttpParams()
    .set('fields','name,capital,alpha2code,flag,population')
    const url = `${this.apiUrl}/region/${termino}${this.API_KEY}`;
    return this.http.get<Country[]>(url, {params: httpParams});
  }

}
