import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { SubirArchivoService } from '../../services/subir-archivo/subir-archivo.service';
import { ModalUploadService } from './modal-upload.service';



@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: [
  ]
})
export class ModalUploadComponent implements OnInit {


  imagenSubir: File;
  imagenTemp: any; // Imagen previsualizada

  constructor( public _subirArchivoService: SubirArchivoService,
              public _modalUploadService: ModalUploadService) { 
    
  }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.imagenTemp = null;
    this.imagenSubir = null;

    this._modalUploadService.ocultarModal();
  }

  seleccionImagen( archivo: File ){
    if(!archivo){
      this.imagenSubir = null;
      return;
    }

    if( archivo.type.indexOf('image') < 0){ //Comprobamos que solo se puedan escoger imagenes
      swal('Solo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      return;
    }
    this.imagenSubir = archivo;

    let reader = new FileReader(); // Vanilla javascript (no hace falta importarlo es javascript puro)
    let urlImagenTemp = reader.readAsDataURL( archivo );
    reader.onloadend = () => this.imagenTemp = reader.result; 

  }

  subirImagen(){

    this._subirArchivoService.subirArchivo( this.imagenSubir, this._modalUploadService.tipo, this._modalUploadService.id)
          .then( resp =>{

            this._modalUploadService.notificacion.emit( resp );
            this.cerrarModal();
          })
          .catch( err =>{
            console.log('Error en la carga...');
          }) 
  }
}
