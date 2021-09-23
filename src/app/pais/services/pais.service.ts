import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "http://api.countrylayer.com/v2";
  private API_KEY: string = "?access_key=656b521b92d02d5944d87c2de895265f";
  constructor(private http: HttpClient) { }

  // esta es la llamada de la petición
  buscarPais( termino:string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}${this.API_KEY}`;
    return this.http.get<Country[]>(url);

  }

}
