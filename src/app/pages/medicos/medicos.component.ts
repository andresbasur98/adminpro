import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MedicoService } from '../../services/medico/medico.service';
import { SubirArchivoService } from '../../services/subir-archivo/subir-archivo.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: [
  ]
})
export class MedicosComponent implements OnInit {

  medicos: Medico[] = [];

  constructor(public _medicoService: MedicoService) { }

  ngOnInit(): void {
    this.cargarMedicos();
  }

  cargarMedicos(){
    this._medicoService.cargarMedicos()
        .subscribe( (medicos: Medico[]) => this.medicos = medicos)
  }

  buscarMedico( termino: string){
    
    if( termino.length <= 0){
      this.cargarMedicos();
    }

    this._medicoService.buscarMedicos( termino )
          .subscribe((medicos: Medico[]) => this.medicos = medicos)
  }

  borrarMedico( medico: Medico ){

    this._medicoService.borrarMedico( medico._id)
        .subscribe( () => this.cargarMedicos());
  }
}
