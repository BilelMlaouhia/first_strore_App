import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UploadStoreService implements OnInit{
 task?:AngularFireUploadTask;
 
 ref?:any;
 percent?:any

  constructor(private fs:AngularFirestore, private fst:AngularFireStorage, 
    private authservice:AuthService) { 

  }

  ngOnInit() : void{
              
  }

  UploadImage(event:any, email?:string){
    const id=Math.random().toString(36).substring(2)
     this.ref=this.fst.ref(id);
     this.task=this.ref.put(event.target.files[0]);
     this.percent=this.task?.percentageChanges();
     this.task?.then((data)=>{
       data.ref.getDownloadURL()
       .then(url=>{
       
         this.fs.collection('Utilisateurs').doc(email).update({
          profile_image:url,
           })
       });

     })
     console.log("uplodaing done");
   
  }


}
