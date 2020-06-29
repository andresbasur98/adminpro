import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NopagefoudComponent } from './shared/nopagefoud/nopagefoud.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';


const appRoutes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}, 
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        loadChildren: () => import('src/app/pages/pages.module').then(m => m.PagesModule)    },
    {path:'**', component: NopagefoudComponent}
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );