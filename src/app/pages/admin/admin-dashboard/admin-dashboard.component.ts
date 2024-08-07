import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  constructor(public login: LoginService) { }

  ngOnInit(): void {
     

  }

  logout() {
    this.login.logOut();
    window.location.reload();
  }

}
