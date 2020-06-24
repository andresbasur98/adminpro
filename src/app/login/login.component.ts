import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/services.index';
import { Usuario } from '../models/usuario.model';
import { element } from 'protractor';


 declare function init_plugins();
 declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ 
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame: boolean = false;

  auth2: any;

  constructor(public router: Router, public _usuarioService: UsuarioService) { }

  ngOnInit(): void {
     init_plugins();
     this.googleInit();

     this.email = localStorage.getItem('email') || ''; //Si tenemos la opción de recordar saldrá el email al entrar directamente
      if(this.email.length > 1){
        this.recuerdame = true;
      }
    }

    googleInit(){
      gapi.load('auth2', () =>{
        this.auth2 = gapi.auth2.init({
          client_id: '823566376470-jdbf28nap33g8onatd6udqo35roia6tc.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });

        this.attachSignin( document.getElementById('btnGoogle'));
      });
    }

    attachSignin( element ){
      this.auth2.attachClickHandler ( element, {}, (googleUser) =>{
        // let profile = googleUser.getBasicProfile();
        let token = googleUser.getAuthResponse().id_token;

        this._usuarioService.loginGoogle( token )
                .subscribe( () =>{

                  // this.router.navigate(['/dashboard']); Sucede un pequeño error por ello ejecutaremos la instrucción de abajo
                  window.location.href = '#/dashboard';
                })
      });
    }

  ingresar( forma: NgForm ){
    // this.router.navigate(['/dashboard']); // Redirigimos al pulsar eñ botón ingresar

    if( forma.invalid ){
      return;
    }

    let usuario = new Usuario( null, forma.value.email, forma.value.password)
    this._usuarioService.login( usuario, forma.value.recuerdame)
            .subscribe(correcto =>{
              this.router.navigate(['/dashboard']);

            });

    // console.log(forma.valid);
    // console.log(forma.value);
  }

}
