import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//Servicios
// import { SettingsService } from './services/settings/settings.service'; cuando no estaban centralizados los servicios en un módulo
import { ServiceModule } from './services/service.module';


//Rutas
import { APP_ROUTES } from './app.routes';


//Modulos
import { PagesModule } from './pages/pages.module';

//temporal
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
