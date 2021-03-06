import { Routes, RouterModule, CanActivate } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalComponent } from './hospital/hospital.component';
import { MedicoComponent } from './medicos/medico.component';
import { MedicosComponent } from './medicos/medicos.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../services/guards/admin.guard';
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';



const pagesRoutes: Routes = [
    // { Lo comentamos( entrando a la fase de lazyload y optimizaciones)
     
    //     path: '',
    //     component: PagesComponent, 
    //     canActivate: [ LoginGuardGuard ],
    //     children: [
            { 
                path: 'dashboard',
                 component: DashboardComponent,
                 canActivate: [ VerificaTokenGuard],
                  data: { titulo: 'Dashboard' }
             },
            { path: 'progress', component: ProgressComponent , data: { titulo: 'Progress' } },
            { path: 'graficas1', component: Graficas1Component , data: { titulo: 'Gráficas' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Tema' } },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario'}},
            { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador'}},
            
            //Mantenimientos
            {
                 path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de Usuarios'},
                 canActivate: [ AdminGuard]
            },
            { path: 'hospitales', component: HospitalComponent, data: { titulo: 'Mantenimiento de Hospitales'}},
            { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Medicos'}},
            { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Crear Medico'}},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

    //     ]
    // },
    
];
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

