import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';
import { UploadStoreService } from '../services/upload-store.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  current_user?:any;
  profile_data?:any;
  ref?:any;
  update_msg?:string;
  autoriser=false;
  inf_email?:string;
  percent?:any;

  constructor(private authservice:AuthService, private fs:AngularFirestore,
    private fa:AngularFireAuth, private upload:UploadStoreService) {
this. getProfileData();
this.current_user=this.authservice.current_user;
this.profile_data=this.authservice.profileArray;


   }

  ngOnInit(): void {
    this.percent=this.upload.percent;
  }

 getProfileData(){

   this.authservice.onshowProfile();
   this.profile_data=this.authservice.profileArray;
   
 }
 

 getUpdateProfil(f:any){
  let data=f.value;

 this.authservice.onUpdateProfile(data)
 }

 getUploadImage(event:any,mail:string){
 
 this.upload.UploadImage(event,mail);
 
 }

 Autoriser(){
  this.autoriser=true;
}


}
