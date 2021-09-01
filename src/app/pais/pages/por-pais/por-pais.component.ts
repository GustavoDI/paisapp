import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = ''
  //  injectar la información de servicio pais nos permite utilizar
  // los servicios definidos en PaisService
  constructor(private paisService: PaisService) { }

  buscar() {
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
      .subscribe(resp => {
        console.log(resp);
      });
  }


}
