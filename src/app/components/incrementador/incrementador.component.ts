import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  // Estos inputs y outputs estan conectados con el componente progress
  
  @ViewChild('txtPorcentaje') txtPorcentaje: ElementRef; // Es obligatorio poner entre los parentesis la referencia que hace al html

  @Input('nombre') leyenda: string = 'Leyenda'; //No es necesario ponerle lo del nombre, esto nos dice cual va a ser la variable desde la que se llame sino estuviese se quedaría leyenda
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter(); //Vamos a emitir un evento para poder modificar los porcentajes

  constructor() {
    
     console.log('Progreso', this.porcentaje);
   }

  ngOnInit(): void {
    // console.log('Leyenda', this.leyenda);
    // console.log(this.porcentaje);
  }

  onChanges( newValue: number){
    console.log( newValue);

    // let elementHTML:any = document.getElementsByName('porcentaje')[0];


    if( newValue >= 100 ){
      this.porcentaje = 100;
    }else if( newValue <= 0){
      this.porcentaje = 0;
    }else{
          this.porcentaje = newValue;
    }

    // elementHTML.value = Number(this.porcentaje); // Evitamos que se puedan escribir caracteres que no sean numeros
    this.txtPorcentaje.nativeElement.value = this.porcentaje;

    this.cambioValor.emit( this.porcentaje);
  }


  cambiarValor( valor: number ){
    if(this.porcentaje > 100 && valor > 0){
      this.porcentaje = 100;
      return;
    }
    if(this.porcentaje <= 0 && valor < 0){
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit( this.porcentaje); // Es lo que emitimos al padre

    this.txtPorcentaje.nativeElement.focus(); //Para colocar el foco en el input que estamos midificando
  }
}
