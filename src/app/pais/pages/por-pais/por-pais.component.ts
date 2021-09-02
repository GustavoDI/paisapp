import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  //  injectar la información de servicio pais nos permite utilizar
  // los servicios definidos en PaisService
  constructor(private paisService: PaisService) { }

  // aqui es el consumo de nuestra peticion http.get que viene desde nuestro servicio
  buscar() {
    this.hayError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
      .subscribe((resp) => {
        console.log(resp);
      },(err)=>{
        // console.log('Error');
        // console.log(err);
        this.hayError = true;
      });
  }


}
