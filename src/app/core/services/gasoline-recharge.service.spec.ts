import { TestBed } from '@angular/core/testing';

import { GasolineRechargeService } from './gasoline-recharge.service';

describe('GasolineRechargeService', () => {
    let service: GasolineRechargeService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GasolineRechargeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
