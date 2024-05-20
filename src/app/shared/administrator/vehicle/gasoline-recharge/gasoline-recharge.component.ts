import { Component, computed, signal, OnInit } from '@angular/core';

import {
    FormsModule,
    FormGroup,
    FormControl,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { GasolineRechargeService } from 'src/app/core/services/gasoline-recharge.service';
import { environment } from 'src/environments/environment.development';

@Component({
    selector: 'app-gasoline-recharge',
    templateUrl: './index.html',
    standalone: true,
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule
    ],
})
export default class GasolineRechargeComponent implements OnInit {
    date = new Date();
    gasolineForm!: FormGroup
    constructor(private gasolineService: GasolineRechargeService){

    }
    ngOnInit(): void {
        this.gasolineForm = new FormGroup({
            mileage: new FormControl<number | null>(null, [
                Validators.required
            ]),
            liters: new FormControl<number | null>(null, [
                Validators.required
            ]),
            liter_price: new FormControl<number | null>(null, [
                Validators.required
            ]),
            amount: new FormControl<number | null>(null, [
                Validators.required
            ]),
        })

        console.log(environment.api)
    }

    getMileage = () => this.gasolineForm.controls["mileage"]
    getLiters = () => this.gasolineForm.controls["liters"]
    getLiterPrice = () => this.gasolineForm.controls["liter_price"]
    getAmount = () => this.gasolineForm.controls["amount"]

    calculateData(event: Event) {
        let liters = this.getLiters()
        let amount = this.getAmount()
        let price = this.getLiterPrice()
        let target = (event?.target as HTMLInputElement).id
        if (target == 'liters' || target == 'mileage') {
            price.setValue(null)
            amount.setValue(null)
        }
        if (liters.value > 0) {
            if (target != 'liter_price') {
                if (liters.value > 0 && amount.value > 0) {
                    price.setValue((amount.value / liters.value).toFixed(2))
                }
            }
            if (target != 'amount') {
                if (liters.value > 0 && price.value > 0) {
                    amount.setValue((price.value * liters.value).toFixed(2))
                }
            }
        }
    }

    save() {
        console.log(this.gasolineForm.getRawValue())
        if (this.gasolineForm.valid) {
            this.gasolineService.addRecord(this.gasolineForm.getRawValue())
                .subscribe(
                    result=>window.alert(result)
                )
        } else {
            window.alert("no pasa")
        }
    }
}


