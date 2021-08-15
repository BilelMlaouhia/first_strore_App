import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  current_user?:string;
  constructor(private AuthService:AuthService, private router:Router) { 
  this.current_user=this.AuthService.current_user;
  }

  ngOnInit(): void {
  }

  getIn(f:any){
    let data=f.value;
    this.AuthService.signIn(data.email,data.password)
     }
   
   }

