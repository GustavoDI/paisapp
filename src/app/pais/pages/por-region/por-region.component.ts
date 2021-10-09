import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right : 5px;
  }
  `
  ]
})
export class PorRegionComponent  {
  regiones : string [] = ['africa', 'americas','asia', 'europe', 'oceania'];
  regionActiva: string = "";
  paises: Country[]=[];

  // Recordar que si queremos utilizar el servicio debemos injectar en nuestro constructor
  // al injectar tenemos acceso a todo los metodos y popropiedades que tiene ese servicio
  constructor(private paisService: PaisService) { }

  getClaseCSS(region:string): string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-aoutline-primary';
  }

  activarRegion(region: string){
    if (region === this.regionActiva){return};
    this.regionActiva = region;
    this.paises =[];
    this.paisService.buscarPorRegion(region)
    .subscribe(paises => this.paises = paises);
  }

  

}
