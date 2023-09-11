import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-cartcomponent',
  templateUrl: './cartcomponent.component.html',
  styleUrls: ['./cartcomponent.component.css'],
})
export class CartcomponentComponent {
  dataFromJson!: IProduct[];
  dataShow!: IProduct[];
  accountSubtotal: number = 0;
  accountshippnfees: number = 0;
  accounttaxes: number = 0;
  accounttotal: number = 0;
  constructor(private service: DataserviceService) {
    this.loadDataJson();
  }

  loadDataJson() {
    this.service.getData().subscribe((data) => {
      this.dataFromJson = data;
      this.dataShow = this.dataFromJson;
      this.doAccount();
    });
  }

  addproduct(item: number) {
    ++this.dataShow[item].quantity;
    this.doAccount();
  }

  substractproduct(item: number) {
    if (this.dataShow[item].quantity != 0) {
      --this.dataShow[item].quantity;
      this.doAccount();
    } else {
      this.dataShow.splice(item, 1);
    }
  }

  deletitem(item: number) {
    if (this.dataShow[item].quantity != 0) {
      this.dataShow.splice(item, 1);
      this.doAccount();
    }
  }

  doAccount() {
    this.accountSubtotal = 0;
    this.accountshippnfees = 0;
    this.accounttaxes = 0;
    this.accounttotal = 0;
    this.dataShow.forEach((item) => {
      this.accountSubtotal += item.price_without_tax * item.quantity;
      this.accountshippnfees += item.shipping_fee * item.quantity;
      this.accounttaxes += item.tax * item.quantity;
      this.accounttotal =
        this.accountSubtotal + this.accountshippnfees + this.accounttaxes;
    });
  }


  removeAll(){
    this.dataFromJson = [];
    this.dataShow =this.dataFromJson;
    this.doAccount();
  }


}
