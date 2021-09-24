import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  @Output() 
  onEnter: EventEmitter<string> = new EventEmitter();

  termino: string="";

  buscar(){
    // Cuando la persona presione enter realiza la llamada a el termino
  this.onEnter.emit(this.termino);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
