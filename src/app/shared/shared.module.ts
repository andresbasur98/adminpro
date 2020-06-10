import { NgModule } from "@angular/core";

import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoudComponent } from './nopagefoud/nopagefoud.component';

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

    ]
})
export class SharedModule{}