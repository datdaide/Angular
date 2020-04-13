import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ShopService } from 'src/app/core/http/shop/shop.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'shop-revenue',
  templateUrl: './shop-revenue.component.html',
  styleUrls: ['./shop-revenue.component.css']
})
export class ShopRevenueComponent implements OnInit , OnChanges{
  @Input() shopId : string;
  @Input() date : Date = new Date();
  
  onDate : Date;
  onlastMonthDate : Date;
  revenue : number = 0;
  previousRevenue : number = 0;
  increasementPercent : number = 0;

  constructor(private shopService:ShopService) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    console.log("changed");
    this.onDate = new Date(this.date.getFullYear(),this.date.getMonth(),1); 
    this.onlastMonthDate = new Date(this.date.getFullYear(),this.date.getMonth() -1, 1); 
    console.log(this.onDate,this.onlastMonthDate);

    this.loadData();
  }

  loadData(){
    let revenueRequest = this.shopService.getShopRevenue(this.shopId,this.onDate);
    let previousRevenueRequest = this.shopService.getShopRevenue(this.shopId,this.onlastMonthDate);
    forkJoin([revenueRequest, previousRevenueRequest]).subscribe(revenueResult => {
      console.log(revenueResult);
    });
  }

}
