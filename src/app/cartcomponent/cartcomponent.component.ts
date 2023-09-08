import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service'
@Component({
  selector: 'app-cartcomponent',
  templateUrl: './cartcomponent.component.html',
  styleUrls: ['./cartcomponent.component.css']
})
export class CartcomponentComponent implements OnInit {

  constructor(private service : DataserviceService) 
  {
   this.loadDataJson();
   }

loadDataJson(){
  this.service.getData();
}

  ngOnInit(): void {
  }

}
