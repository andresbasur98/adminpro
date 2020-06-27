import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../services/services.index';
import { Hospital } from 'src/app/models/hospital.model';
// import swal from 'sweetalert';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  hospitales: Hospital[] = [];

  cargando: boolean;
  totalRegistros: number;

  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService: ModalUploadService
    ) { }

  ngOnInit(): void {

    this.cargarHospitales();

    this._modalUploadService.notificacion
          .subscribe( () => this.cargarHospitales());
  }

  buscarHospital( termino: string ){

    if( termino.length <= 0 ){
      this.cargarHospitales();
      return;
    }

    this._hospitalService.buscarHospital(termino)
          .subscribe((hospitales) =>  this.hospitales = hospitales);
          
  }

  cargarHospitales(){

    this.cargando = true;

   return this._hospitalService.cargarHospitales( )
        .subscribe((hospitales:any) => this.hospitales = hospitales);
  }

  crearHospital() {

    swal("Write something here:", {
      title: 'Crear Hospital',
      text: 'Ingrese el nombre del hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode:true

    }).then((nombre: string) => {
        
        if( !nombre || nombre.length == 0){
          return;
        }
        console.log(nombre);
        this._hospitalService.crearHospital( nombre )
                .subscribe(() => this.cargarHospitales());

      });

  }

  guardarHospital( hospital: Hospital){
    this._hospitalService.actualizarHospital( hospital )
        .subscribe();
  }

  borrarHospital( hospital: Hospital){
    this._hospitalService.borrarHospital( hospital._id)
          .subscribe( () => this.cargarHospitales());
  }

  actualizarImagen(hospital: Hospital){
    this._modalUploadService.mostrarModal( 'hospitales', hospital._id);
  }
}
