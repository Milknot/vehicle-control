import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import MobileNavComponent from 'src/app/core/mobile-nav/mobile-nav.component';

@Component({
    selector: 'app-administrator',
    standalone: true,
    imports:[
        RouterModule,
        MobileNavComponent
    ],
    templateUrl: "./index.html"
})
export default class AdministratorComponent {}
