import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-cartcomponent',
  templateUrl: './cartcomponent.component.html',
  styleUrls: ['./cartcomponent.component.css']
})
export class CartcomponentComponent {
 dataFromJson!: IProduct[];
    displayedColumns =
        ['id', 'item_name', 'short_description', 'quantity', 'price_without_tax', 'tax', 'shipping_fee'];
    dataSource = ELEMENT_DATA;
    constructor(private service : DataserviceService) 
    {
     this.loadDataJson();
     }
  
  loadDataJson(){
   this.service.getData().subscribe( data => {
    this.dataFromJson = data;
    });
    console.log(" -- - -- -")
    console.log(this.dataFromJson);
  }
  
    ngOnInit(): void {
    }
  
  }
  
  export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

