import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { NotAuthGuardService } from './guard/not-auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyproductComponent } from './myproduct/myproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ProfilComponent } from './profil/profil.component';
import { RegistreComponent } from './registre/registre.component';

const routes: Routes = [
  {path:'login',component:LoginComponent, canActivate:[NotAuthGuardService]},
  {path:'registre',component:RegistreComponent, canActivate:[NotAuthGuardService]},
  {path:'home' ,component:HomeComponent},
  {path:'products' ,component:ProductsComponent},
  {path:'myproduct' ,component:MyproductComponent, canActivate:[AuthGuardService]},
  {path:'profile', component:ProfilComponent, canActivate:[AuthGuardService]},
  {path:'navbar', component:NavbarComponent , canActivate:[AuthGuardService]},
  {path:'ajout_produit', component:AddProductComponent, canActivate:[AuthGuardService]},
  {path:'product/:id', component:ProductDetailsComponent},
  {path:'' ,component:HomeComponent},
  {path:'**',redirectTo:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
