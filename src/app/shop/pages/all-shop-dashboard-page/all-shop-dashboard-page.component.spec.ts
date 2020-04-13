import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShopDashboardPageComponent } from './all-shop-dashboard-page.component';

describe('AllShopDashboardComponent', () => {
  let component: AllShopDashboardPageComponent;
  let fixture: ComponentFixture<AllShopDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllShopDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllShopDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
