import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService) { } 

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiaColor( tema: string, link: any){
   
    this.aplicarCheck(link);
    this._ajustes.aplicarTema( tema );
  }
   

  aplicarCheck( link:any ){ // Que aparezca el check en el tema que seleccionamos
    let selectores:any = document.getElementsByClassName('selector');

    for( let ref of selectores){
      ref.classList.remove('working'); // Removemos todas las que tengan esta clase
    }
    link.classList.add('working');// Le agregamos la clase al seleccionado unicamente

  }

  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema;

    for( let ref of selectores){
      if( ref.getAttribute('data-theme') == tema ){
        ref.classList.add('working');
        break;
      }
    }

  }
}
