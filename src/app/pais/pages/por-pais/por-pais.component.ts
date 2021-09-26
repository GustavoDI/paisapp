import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

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

    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
      },(err)=>{
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string){
this.hayError = false;

  }
}
