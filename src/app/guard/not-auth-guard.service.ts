import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuardService implements CanActivate {

  constructor(private as:AuthService, private router:Router ) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Promise<boolean>
  {
  return new Promise(resolve=>{
   this.as.user?.subscribe(user=>{
     if(user){resolve(false)
      this.router.navigate(['/home'])
    }else{resolve(true)
    
    }
   })

  })

  }
  


}
