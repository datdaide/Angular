import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShopComponent } from './components/list-shop/list-shop.component';

import { ShopRoutingModule } from './shop-routing.module';
import { AllShopDashboardPageComponent } from './pages/all-shop-dashboard-page/all-shop-dashboard-page.component';
import { ShopContentComponent } from './shared/shop-content/shop-content.component';
import { ShopDashboardPageComponent } from './pages/shop-dashboard-page/shop-dashboard-page.component';
import { ShopRevenueComponent } from './components/shop-revenue/shop-revenue.component';
import { ShopBaseComponent } from './shared/shop-base/shop-base.component';
@NgModule({
  declarations: [
    ListShopComponent,
    AllShopDashboardPageComponent,
    ShopContentComponent,
    ShopDashboardPageComponent,
    ShopRevenueComponent,
    ShopBaseComponent
  ],
  exports: [ListShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
