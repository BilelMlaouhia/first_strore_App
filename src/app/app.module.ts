import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { environment} from 'src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire';

import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ProfilComponent } from './profil/profil.component';
import { MyproductComponent } from './myproduct/myproduct.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthService } from './auth.service';
import { UploadStoreService } from './services/upload-store.service';
import { AuthGuardService } from './guard/auth-guard.service';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistreComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    ProfilComponent,
    MyproductComponent,
    AddProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
  
    
  ],
  providers: [AuthService,UploadStoreService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
