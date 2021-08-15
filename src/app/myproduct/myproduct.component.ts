import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.scss']
})
export class MyproductComponent implements OnInit,OnDestroy {
  current_user?:string;
  item?:any
  auth=false;
  success=false;
  prod_details?:any;
  nom_produit?:string;
  prix_produit?:string;
  img?:string;
  sub?:Subscription;
  
   constructor(private authservice:AuthService, private fs:AngularFirestore) {
  
  this.current_user=this.authservice.current_user
   this.AddAllProducts();
    }
 
   ngOnInit(): void {
   
   }
 
  AddAllProducts(){
 
   
   this.authservice.onShowAllProducts();
    this.item=this.authservice.dataArray;
   // console.log(this.authservice.dataArray)
  }
  
  ondelete(id:string){
    this.fs.collection('produits').doc(id).delete();
    console.log("product deleted");
   
  }

  getId(id:string){
this.prod_details=id;
return this.sub=
this.fs.collection('produits').doc(id).snapshotChanges().subscribe((data)=>{
  this.nom_produit=data.payload.get('name');
  this.prix_produit=data.payload.get('prix');
  this.img=data.payload.get('product_image')
})

  }
  
  onUpdate(f:any){
 
    let data=f.value;
    let nom=data.name;
    let price=data.prix;
    let img=data.image;
    let task=this.fs.collection('produits').doc(this.prod_details);
    if(nom!=''){
    task.update({
     name:nom,
      }) .then(()=>{
        this.success=true;
        console.log("Product Name Updated Successfully");
      }).catch(error=>{
        console.log("error product Name can not be updated!!");
      })
  };
  if(price!=''){
    task.update({
     prix:price,
      }) .then(()=>{
        this.success=true;
        console.log("Product Price Updated Successfully");
      }).catch(error=>{
        console.log("error product Price can not be updated!!");
      })
  };
  if(img!=''){
    task.update({
     product_image:data.image,
      }) .then(()=>{
        this.success=true;
        console.log("Product Image Updated Successfully");
      }).catch(error=>{
        console.log("error product Image can not be updated!!");
      })
  }
  

  }

 ngOnDestroy(){
   this.sub?.unsubscribe();
 }

 }
 
