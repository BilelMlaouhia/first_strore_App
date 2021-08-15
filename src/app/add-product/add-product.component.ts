import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
id?:string;
sucess='Saved';

  constructor( private authService:AuthService, private fa:AngularFireAuth, 
    private fs:AngularFirestore, private router:Router) {
    this.fa.user.subscribe((user)=>{
      this.id=user?.uid;
      })
     }

  ngOnInit(): void {
  }

  Add_product(f:any) {
   let data=f.value;
   this.authService.onAddProducts(data);
   console.log(this.sucess);
   window.location.reload();
     
  }

}
