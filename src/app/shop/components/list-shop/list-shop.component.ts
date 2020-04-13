import { Component, OnInit } from '@angular/core';
import { IShop } from 'src/app/shared/models/shop.model';
import { UserService } from 'src/app/core/http/user/user.service';
import { ShopBaseComponent } from '../../shared/shop-base/shop-base.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'd-list-shop',
  templateUrl: './list-shop.component.html',
  styleUrls: ['./list-shop.component.css']
})
export class ListShopComponent implements OnInit {

  private userId : string = "5e8fee7c3f216c24f3a302dd";

  shops : IShop[] = [];
  selectedShopId : string;
  constructor(private route : ActivatedRoute, private userService :UserService) {
    route.firstChild.params.subscribe(params => {
      this.selectedShopId = params['id'];
    });
  }

  ngOnInit() {
    this.userService.getShopListByUserId(this.userId).subscribe({
      next : (shops) => {this.takeShops(shops);}
    });
  }

  takeShops(shops :IShop[]){
    this.shops = shops;
  }

  onShopClick(shopId :string){
    this.selectedShopId = shopId;
  }

}
