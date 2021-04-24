import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Product} from "../../shared/interfaces/product";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public exit: Subject<void> = new Subject<void>();

  public constructor(private httpClient: HttpClient) {
  }

  public getProduct(barcode: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.apiUrl}/products`, {params: {barcode}})
  }
}
