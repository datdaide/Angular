import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopRevenueComponent } from './shop-revenue.component';

describe('ShopRevenueComponent', () => {
  let component: ShopRevenueComponent;
  let fixture: ComponentFixture<ShopRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopRevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
