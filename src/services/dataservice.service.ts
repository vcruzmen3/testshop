import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  data: any = [];
  loadData: boolean = false;

  constructor(private http: HttpClient) {}

  getData(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('../../assets/jsonfile/products.json');
  }
}
