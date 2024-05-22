import { Component } from '@angular/core';

import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'

@Component({
  selector: 'app-gasoline-recharges',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './gasoline-recharges.component.html',
  styleUrl: './gasoline-recharges.component.scss'
})
export default class GasolineRechargesComponent {

    dataSource!: Array<any>
    displayedColumns!: number

    announceSortChange(event: Event){

    }

}
