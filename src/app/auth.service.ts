import { error } from '@angular/compiler/src/util';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit, OnDestroy{

  user?: Observable<firebase.default.User |null>;
  uid?:string;
  current_user:any;
  Id?:string;
  dataArray:any;
  profileArray?:any;
  update_msg?:string;
  mes_prod?:Subscription;
  mon_profile?:Subscription;
 
  constructor(private fa:AngularFireAuth, private router:Router, 
    private fs:AngularFirestore) {
    this.user=this.fa.user;
    
    this.fa.user.subscribe((user)=>{
   if(user) {this.uid=user?.uid; this.current_user=user?.uid;}
   this.onShowAllProducts();
  this.onshowProfile();
    })
 
     }

     ngOnInit() : void{
              
     }

  signUp( f:any){
 let data=f;
 return this.fa.createUserWithEmailAndPassword(data.email,data.password).then(()=>{
     this.user=this.fa.user;
     this.mes_prod=
     this.fa.user.subscribe((user)=>{
  if(user) this.Id=user?.uid;
                
      
         this.fs.collection("Utilisateurs").doc(data.email).set ({
          Unique_ID: this.Id,
          full_name: data.fullname,
          email: data.email,
          description: data.textarea,
          profile_image:data.image
        }).then(()=>{
          console.log("account created");
         this.router.navigate(["/profile"]);
        })
       
      });
    }).catch(()=>{
   alert("error : used email!!");
 })
  }

  signIn(email:string,password:string){
    console.log (this.uid);
    this.fa.signInWithEmailAndPassword(email,password).then(user=>{
     // alert("Success Loged in");
       
       this.fa.currentUser.then((user)=>{
      this.user=this.fa.user;
       this.current_user=user?.uid;
       this.router.navigate(['/profile']);
    })
  }).catch(()=>{
    console.log("error : account does not exist");
  })
  }
  
  singOut(){
    this.fa.signOut().then(()=>{
      console.log("You Signed Out !!");
      this.router.navigate(['/home']);
      
    })
  }

  onAddProducts(data:any){
       this.fa.currentUser.then((user)=>{
     this.current_user=user?.uid;
    })
  this.fs.collection("produits").doc().set ({
    Unique_ID: this.current_user,
    name: data.prod_name,
    prix: data.prix,
    product_image:data.add
  }).then(()=>{ console.log("products Added with success");
  
})
  }

  onShowAllProducts(){
    this.fa.currentUser.then((user)=>{
      this.current_user=user?.uid;
     })
     this.mes_prod=
     this.fs.collection('produits').snapshotChanges()
     .subscribe((data)=>{
     
       this.dataArray= data.map((element)=>{
      return   {
      ID:element.payload.doc.id,
      name:element.payload.doc.get('name'),
      prix:element.payload.doc.get('prix'),
      image:element.payload.doc.get('product_image'),
      unique_id:element.payload.doc.get('Unique_ID')
         }
    
       })
     })
      
  }
   
  onshowProfile(){
     this.mon_profile=
       this.fs.collection('Utilisateurs').snapshotChanges()
       .subscribe((data)=>{
       
         this.profileArray= data.map((element)=>{
        return   {
        ID:element.payload.doc.id,
        full_name:element.payload.doc.get('full_name'),
        email:element.payload.doc.get('email'),
        profile_image:element.payload.doc.get('profile_image'),
        unique_id:element.payload.doc.get('Unique_ID'),
        description:element.payload.doc.get('description')
           }
      
         })
       })
  }

  onUpdateProfile(data:any){

    this.fs.collection('Utilisateurs').doc(data.email).update({
      full_name:data.full_name,  
      profile_image:data.profile_image,
      description:data.description
  
    }).then(()=>{
      this.update_msg='informations Updated with Success';
    })
      window.location.reload();  
      this.router.navigate(['/profile']);
   }

  ngOnDestroy(){
    this.mes_prod?.unsubscribe();
    this.mon_profile?.unsubscribe();
  }

}