import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  current_user?:string;
 item?:any
 auth=false;
  constructor(private authservice:AuthService) {
 
 this.current_user=this.authservice.current_user
  this.AddAllProducts();
   }

  ngOnInit(): void {
  }

 AddAllProducts(){

   this.authservice.onShowAllProducts();
   this.item=this.authservice.dataArray;
   //console.log(this.authservice.dataArray)
 }

}
