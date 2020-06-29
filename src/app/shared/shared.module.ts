import { NgModule } from "@angular/core";

import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoudComponent } from './nopagefoud/nopagefoud.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Pipes
import { PipesModule } from '../pipes/pipes.module';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';

@NgModule({
    declarations:[
        BreadcrumsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoudComponent,
        ModalUploadComponent
    ],
    exports:[
        BreadcrumsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoudComponent,
        ModalUploadComponent
    ],
    imports:[
        RouterModule, //Hay que importarlo para que se navegue correctamente entre los componentes que se encuentran aqui
        CommonModule, //Es necesario para poder hacer funciones como *ngIf, *ngFor, pipes, etc
        PipesModule
    ]
})
export class SharedModule{}