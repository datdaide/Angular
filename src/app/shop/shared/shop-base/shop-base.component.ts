import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shop-base',
  template: '',
})
export class ShopBaseComponent {
  public shopId : string;
  
  constructor(route:ActivatedRoute) { 
    route.params.subscribe(routeParams => {
      this.routeParamChanged(routeParams);
    });
  }

  routeParamChanged(routeParams){
    this.shopId = routeParams.id;
  }

}
