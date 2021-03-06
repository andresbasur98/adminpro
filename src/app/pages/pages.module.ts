import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import {FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

//Rutas
import { PAGES_ROUTES } from './pages.routes';

//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';


// Pipe Module
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalComponent } from './hospital/hospital.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


@NgModule({
    declarations:[
     DashboardComponent,
     ProgressComponent,
     Graficas1Component,
    //  PagesComponent, (parte optimizaciones lo cargaremos desde otro lado) - app.module
     IncrementadorComponent,
     GraficoDonaComponent,
     AccountSettingsComponent,
     PromesasComponent,
     RxjsComponent,
     ProfileComponent,
     UsuariosComponent,
    //  ModalUploadComponent, (parte optimizaciones lo cargaremos desde otro lado) - app.module
     HospitalComponent,
     MedicosComponent,
     MedicoComponent,
     BusquedaComponent
    ],
    exports:[
     DashboardComponent,
     ProgressComponent,
     Graficas1Component,
     
    ],
    imports:[
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ]
})
export class PagesModule{}