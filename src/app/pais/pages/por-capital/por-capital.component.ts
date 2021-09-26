import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];

  //  injectar la información de servicio pais nos permite utilizar
  // los servicios definidos en PaisService
  constructor(private paisService: PaisService) { }

  // aqui es el consumo de nuestra peticion http.get que viene desde nuestro servicio
  buscar(termino:string ) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
      },(err)=>{
        this.hayError = true;
        this.paises = [];
      });
  }

  
}
