import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTipsComponent } from './featured-tips.component';

describe('FeaturedTipsComponent', () => {
  let component: FeaturedTipsComponent;
  let fixture: ComponentFixture<FeaturedTipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedTipsComponent]
    });
    fixture = TestBed.createComponent(FeaturedTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
