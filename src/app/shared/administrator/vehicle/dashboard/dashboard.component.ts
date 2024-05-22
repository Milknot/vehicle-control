import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { RouterLinkWithHref } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import GasolineRechargeComponent from '../gasoline-recharge/gasoline-recharge.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        MatExpansionModule,
        MatButtonModule,
        RouterLinkWithHref
    ],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export default class DashboardComponent {
    public panelOpenState!: boolean
    value = signal('')
    constructor(public dialog: MatDialog) {
        this.value.set('test')
    }

    showRecord(){
        this.dialog.open(GasolineRechargeComponent);

    }
}
