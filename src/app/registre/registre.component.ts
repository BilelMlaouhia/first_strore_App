import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: '.app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegistreComponent implements OnInit {
 Id?:string;
 image?:string;
 done=true;
  constructor(private AuthService:AuthService, private router:Router,
     private fs:AngularFirestore, private fa:AngularFireAuth) {
    // this.Id=this.AuthService.uid;
       
      }

  ngOnInit(): void {
    
  
  }
  onAddImg(f:any){
    let data=f.value;
    this.image=data.image;
    this.done=false;
  }

   getRegistred(f:any){
 let data=f.value;
 this.AuthService.signUp(data);
 }

  }


