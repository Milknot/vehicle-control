import { Injectable } from '@angular/core';
import { GasolineRecharge } from '../models/gasoline-recharge';
import { HttpClient, HttpRequest } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { ApiResponse } from '../models/api-response';

@Injectable({
    providedIn: 'root',
})

export class GasolineRechargeService {

    constructor(private http: HttpClient) { }

    addRecord(new_record: GasolineRecharge) {
        const url = environment.api
        console.log(url)
        return this.http.post(url + "/vehicle/gasoline-recharge", new_record)
    }
}
