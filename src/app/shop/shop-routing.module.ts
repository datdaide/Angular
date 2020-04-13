import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllShopDashboardPageComponent } from './pages/all-shop-dashboard-page/all-shop-dashboard-page.component';
import { ShopContentComponent } from './shared/shop-content/shop-content.component';
import { ShopDashboardPageComponent } from './pages/shop-dashboard-page/shop-dashboard-page.component';


const routes: Routes = [
    {
        path:'', 
        component:ShopContentComponent,
        children: [
            {path:'',component:AllShopDashboardPageComponent},
            {path:':id',component:ShopDashboardPageComponent}
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule { }
