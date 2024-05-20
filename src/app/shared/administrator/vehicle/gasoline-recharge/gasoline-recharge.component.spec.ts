import { ComponentFixture, TestBed } from '@angular/core/testing';

import GasolineRechargeComponent from './gasoline-recharge.component';

describe('GasolineRechargeComponent', () => {
    let component: GasolineRechargeComponent;
    let fixture: ComponentFixture<GasolineRechargeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [GasolineRechargeComponent],
        });
        fixture = TestBed.createComponent(GasolineRechargeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
