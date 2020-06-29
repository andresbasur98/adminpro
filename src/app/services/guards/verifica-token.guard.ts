import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';
import { resolve } from 'dns';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class VerificaTokenGuard implements CanActivate {

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ){}
// Este guard nos va a permitir actualizar el token siempre que estemos dentro de la web

  canActivate():  Promise<boolean> | boolean  {
    console.log('Token guard');

    let token = this._usuarioService.token;
    let payload = JSON.parse( atob( token.split('.')[1] ) ) // atob decodifica una cadena de caracteres que ha sido codificada en base64

    let expirado = this.expirado( payload.exp );

    if( expirado){
      this.router.navigate(['/login']);
      return false;
    }

    return this.verificaRenueva( payload.exp );
  }

  verificaRenueva( fechaExp: number): Promise<boolean> { //Renovaremos el token calculando la fecha de expiración sumandole 4 horas para comprobar si tras pasar ese tiempo hubiese caducado
    return new Promise(( resolve, reject ) =>{

      let tokenExp = new Date( fechaExp * 1000);
      let ahora = new Date();

      ahora.setTime( ahora.getTime() + ( 4 * 60 * 60 * 1000 )); //Incrementando en 4 horas

      if(tokenExp.getTime() > ahora.getTime()){
        resolve(true); // Aún no quiero renovar el token porque no esta próximo a vencer
      }else{
        this._usuarioService.renuevaToken()
            .subscribe(() =>{
              resolve(true);
            }, () =>{
              this.router.navigate(['/login']);
              reject( false );
            })
      }

      resolve( true );
    })
  }

  expirado( fechaExp:number ){
    let ahora = new Date().getTime() / 1000; //Lo dividimos para que este en segundos y sea compatible

    if( fechaExp < ahora){
      return true;
    }else {
      return false;
    }
  }
  
}
