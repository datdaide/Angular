import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDashboardPageComponent } from './shop-dashboard-page.component';

describe('ShopDashboardPageComponent', () => {
  let component: ShopDashboardPageComponent;
  let fixture: ComponentFixture<ShopDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
