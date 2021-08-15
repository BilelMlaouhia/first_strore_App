import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  current_user?:string;
  constructor(private authService:AuthService) {
    this.current_user=this.authService.current_user;
   }

  ngOnInit(): void {
  }

}
