import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderNavComponent } from 'src/app/core/header-nav/header-nav.component';
import MobileNavComponent from 'src/app/core/mobile-nav/mobile-nav.component';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-administrator',
    standalone: true,
    imports:[
        RouterModule,
        MobileNavComponent,
        HeaderNavComponent,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        FormsModule
    ],
    templateUrl: "./administrator.component.html"
})
export default class AdministratorComponent {
    opened(){}
}
