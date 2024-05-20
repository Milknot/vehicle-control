import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
    selector: 'app-loading-dialog',
    standalone: true,
    imports: [
        MatDialogModule,
        MatProgressSpinnerModule
    ],
    templateUrl: './loading-dialog.component.html',
    styleUrl: './loading-dialog.component.scss'
})
export class LoadingDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}
