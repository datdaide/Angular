import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError, Observable } from 'rxjs';
import { IShop } from 'src/app/shared/models/shop.model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl :string = environment.api.url;
  private v ?:string = "v1";
  private controller :string = "users";
  private url : string = `${this.apiUrl}/${ this.v ? (this.v + "/") : "" }${this.controller}`;

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

  getShopListByUserId(userId) : Observable<IShop[]>{
    return this.http.get<IShop[]>(`${this.url}/${userId}/shops/`)
    .pipe(
        tap(data => console.log(data)),
        catchError(this.handleErrors)
    );
  }
}
