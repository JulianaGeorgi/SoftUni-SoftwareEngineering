import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTipsComponent } from './travel-tips.component';

describe('TravelTipsComponent', () => {
  let component: TravelTipsComponent;
  let fixture: ComponentFixture<TravelTipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelTipsComponent]
    });
    fixture = TestBed.createComponent(TravelTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
