import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  constructor() { }
  // El ngOnInit se dispara solo una vez cuando el componente ya esta incializado.
  ngOnInit(): void {

    this.debouncer.pipe(debounceTime(300))
    .subscribe(valor =>{
      this.onDebounce.emit(valor);
      console.log('debouncer :', valor);
    });
  }

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  // aqui vamos a recibir con un input = entrada del dato!
  // crear esto nos crea una nueva propiedad que puedo para colocar el 
  // placeholder ( esto se debe modificar en el pais-input.html donde
  // indica que esta el placeholder)
  @Input() placeholder: string = "";


  debouncer: Subject<string> = new Subject();
  termino: string="";

  buscar(){
    // Cuando la persona presione enter realiza la llamada a el termino
  this.onEnter.emit(this.termino);
  }

  // teclaPesionada(event: any){
  //   const valor = event.target.value;
  //   console.log(valor);

  //   console.log(this.termino);
  // }
  teclaPesionada(){
    // next indica que lo siguiente despues del debouncer sera en el inicializador 
    // OnInit el subscrito y recibe el nuevo valor 
    this.debouncer.next(this.termino);
  }

}
