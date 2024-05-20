import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnMaintenanceComponent } from './on-maintenance.component';

describe('OnMaintenanceComponent', () => {
  let component: OnMaintenanceComponent;
  let fixture: ComponentFixture<OnMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
