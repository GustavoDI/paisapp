import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais! : Country ;
  constructor( private activatedRoute: ActivatedRoute,
               private paisService: PaisService) { }

  ngOnInit(): void {

    // con rxjs
    this.activatedRoute.params
    .pipe(
      // switchMap((param)=>this.paisService.buscarPaisPorAlpha(param.id))
      switchMap( ( {id} ) => this.paisService.buscarPaisPorAlpha (id) ), 
      tap(console.log)
    )
    // .subscribe(pais =>{
    //   console.log(pais);
    // });
    .subscribe(pais =>this.pais = pais);


    // this.activatedRoute.params
    // //* Forma 1 de realizar
    // // .subscribe(params =>{
    // //   console.log(params);
    // // forma 2 de realizar
    
    // .subscribe(({id}) =>{
    //   console.log(id);
    //   this.paisService.buscarPaisPorAlpha(id)
    //   .subscribe(pais =>{
    //     console.log(pais);
    //   });
    // });
  }

}
// Vamos a crear otro ibservable esta vez en nuestro servicio.