import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: "assets/css/colors/default.css",
    tema: 'default'
  }

  constructor(@Inject(DOCUMENT) private _document) { //Obtenemos acceso al dom ) { 
    this.cargarAjustes(); // Para que se carguen los ajustes al iniciar la página
  }

  guardarAjustes() {
    // console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes)); // Guardar los cambios del tema en el localstorage
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      // console.log('Cargando del localstorage');
      this.aplicarTema( this.ajustes.tema);

    } else {
      // console.log('Usando valores por defecto');
      this.aplicarTema( this.ajustes.tema);
    }
  }

  aplicarTema(tema: string) {
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url); //Permitimos cambiar los temas del template

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }

}



interface Ajustes {
  temaUrl: string;
  tema: string;
}