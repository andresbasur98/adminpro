import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService,
          SidebarService,
          SharedService, 
          UsuarioService,
          LoginGuardGuard,
          SubirArchivoService,
          MedicoService
       } from './services.index';
       
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import { HospitalService } from './hospital/hospital.service';
import { AdminGuard } from './guards/admin.guard';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
    AdminGuard,
    SubirArchivoService,
    ModalUploadService,
    HospitalService,
    MedicoService
  ]
})
export class ServiceModule { }
