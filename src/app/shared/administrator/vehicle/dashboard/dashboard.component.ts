import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        MatExpansionModule,
    ],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export default class DashboardComponent {
    public panelOpenState!: boolean
    value = signal('')
    constructor() {
        this.value.set('test')
    }
}
