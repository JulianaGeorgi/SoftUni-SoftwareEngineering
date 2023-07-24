import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSnackBarComponent } from './mat-snack-bar.component';

describe('MatSnackBarComponent', () => {
  let component: MatSnackBarComponent;
  let fixture: ComponentFixture<MatSnackBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatSnackBarComponent]
    });
    fixture = TestBed.createComponent(MatSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
