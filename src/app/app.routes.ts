import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NopagefoudComponent } from './shared/nopagefoud/nopagefoud.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}, 
    {path:'**', component: NopagefoudComponent}
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );