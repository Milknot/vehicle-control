import { ComponentFixture, TestBed } from '@angular/core/testing';

import GasolineRechargesComponent from './gasoline-recharges.component';

describe('GasolineRechargesComponent', () => {
  let component: GasolineRechargesComponent;
  let fixture: ComponentFixture<GasolineRechargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasolineRechargesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasolineRechargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
