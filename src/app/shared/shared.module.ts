import { NgModule } from "@angular/core";

import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoudComponent } from './nopagefoud/nopagefoud.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        BreadcrumsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoudComponent
    ],
    exports:[
        BreadcrumsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoudComponent
    ],
    imports:[
        RouterModule, //Hay que importarlo para que se navegue correctamente entre los componentes que se encuentran aqui
        CommonModule //Es necesario para poder hacer funciones como *ngIf, *ngFor, pipes, etc
    ]
})
export class SharedModule{}