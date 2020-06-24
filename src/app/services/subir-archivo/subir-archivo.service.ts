import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  subirArchivo( archivo: File, tipo: String, id: string){

    return new Promise( (resolve,reject) =>{ //Lo hacemos dentro de la promesa para poder determinar a los demás componentes cuando termina el proceso
      let formData = new FormData();
        let xhr = new XMLHttpRequest();

        formData.append( 'imagen', archivo, archivo.name); // Le indicamos el archivo que queremos subir
        xhr.onreadystatechange = () =>{
          if( xhr.readyState == 4 ){
            if( xhr.status == 200){
              console.log('Imagen subida');
              resolve( JSON.parse(xhr.response));
            }else{
              console.log('Fallo la subida');
              reject( JSON.parse(xhr.response));
            }
          }
        };

        let url = URL_SERVICIOS + '/upload/' + tipo+ '/' + id;
        xhr.open('PUT', url, true); // true, estamos diciendo que sea asincrona
        xhr.send(formData);
    });

  
  }
}
