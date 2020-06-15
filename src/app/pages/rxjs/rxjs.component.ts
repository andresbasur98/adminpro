import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs'
import { retry,map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 

    

   this.subscription =  this.regresaObservable()
     //.pipe(
    //   retry(2) // Para si falla lo intente el numero de veces que quiera (2).
    //   )
      .subscribe(  // tres callback
      numero => console.log('Subs', numero),
      error  => console.log(error),
      () => console.log('El observador terminó!!')          
      );

  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('La página se va a cerrar');
    this.subscription.unsubscribe(); // Para que deje de observar cuando nos salgamos del componente
  }

  regresaObservable(): Observable<any>{
    return new Observable( (observer: Subscriber<any>) =>{

      let contador = 0;

      let intervalo = setInterval(()=>{

        contador ++;

        const salida = {
          valor: contador
        };

        observer.next( salida );

        // if( contador == 3){
        //   clearInterval( intervalo );
        //   observer.complete(); 
        // }

        // if( contador == 2){
        //   clearInterval( intervalo ); Manejo del error
        //   observer.error('El error del 2');
        // }

      }, 1000);

    }).pipe(
      map( resp => resp.valor), // Regresamos la respuesta como queramos)
      filter( ( valor, index)=>{ // Filtramos lo que nos interesa pasar al subscribe
        // console.log('Filter', valor, index);

        if(( valor % 2) == 1){
          // Impar
           return true;
        }else{
          //par
          return false;
        }
      })
    );

    
  }

}
