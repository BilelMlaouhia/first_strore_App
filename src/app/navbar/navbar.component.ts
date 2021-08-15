import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
isAuth=true;
  constructor(private authService:AuthService, private router:Router) { 
this.authService.user?.subscribe((user)=>{
 if(user) this.isAuth=true;
 else this.isAuth=false;
});
  }

  ngOnInit(): void {
  }
  
  onSignOut(){
    this.authService.singOut();
    
    
    
  }
  

}
