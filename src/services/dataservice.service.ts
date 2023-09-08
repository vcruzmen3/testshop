import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
data: any= [];
loadData: boolean = false;


  constructor(private http : HttpClient) { 

  }

  getData(){
    console.log("On Service");
    this.http.get("../../assets/jsonfile/products.json")
    .subscribe(resp=> {
    this.data = resp;
    console.log(this.data);
    this.loadData =true;
    });
  }
}
