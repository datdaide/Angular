import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import { IShop } from 'src/app/shared/models/shop.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private apiUrl :string = environment.api.url;
  private v ?:string;
  private controller :string = "shops";
  private url : string = `${this.apiUrl}/${ this.v ? (this.v + "/") : "" }${this.controller}/`;

  constructor(private http:HttpClient) { }

  private handleErrors(err: HttpErrorResponse){
    let errorMessage = "";
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occurred : ${err.error.message}`;
    }else{
      errorMessage = `Server returne code : ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }

  // getShopListByUserId(userId) : Observable<IShop[]>{
  //   return this.http.get<IShop[]>(this.url `${this.url}/$`)
  //   .pipe(
  //       tap(data => console.log(data)),
  //       catchError(this.handleErrors)
  //   );
  // }

  getShopRevenue(shopId :string, onDate : Date ){
    return this.http.get<IShop[]>(`${this.url}/${shopId}/revenues?onDate=${onDate.toDateString}`)
    .pipe(
        tap(data => console.log(data)),
        catchError(this.handleErrors)
    );
  }


}
