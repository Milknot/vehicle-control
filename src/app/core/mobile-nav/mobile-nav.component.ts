import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterLinkWithHref
  ],
})
export default class MobileNavComponent {

    constructor(private router: Router){

    }

    dashboard(){
        this.router.navigate(["/vehicle/dashboard"])
    }

    newRecord(){
        this.router.navigate(["/vehicle/gasoline-recharge"])
    }
}
