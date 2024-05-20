import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDialogComponent } from './loading-dialog.component';

describe('LoadingComponent', () => {
  let component: LoadingDialogComponent;
  let fixture: ComponentFixture<LoadingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
