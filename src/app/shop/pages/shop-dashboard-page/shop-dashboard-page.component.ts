import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopBaseComponent } from '../../shared/shop-base/shop-base.component';

@Component({
  selector: 'd-shop-dashboard-page',
  templateUrl: './shop-dashboard-page.component.html',
  styleUrls: ['./shop-dashboard-page.component.css'],
  
})
export class ShopDashboardPageComponent extends ShopBaseComponent implements OnInit {
  
  constructor(private route:ActivatedRoute) { 
    super(route);
  }

  ngOnInit() {
    
  }


}
