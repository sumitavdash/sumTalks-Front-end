import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { LoginService } from 'src/app/services/login.service';

interface User {
  fullName: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('staggerAnimation', [
      transition('* => *', [
        animate('1s', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(-5px)', offset: 0.2 }),
          style({ transform: 'translateY(0)', offset: 0.4 }),
          style({ transform: 'translateY(-5px)', offset: 0.6 }),
          style({ transform: 'translateY(0)', offset: 0.8 }),
          style({ transform: 'translateY(-5px)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user: User | null = null;
  staggeredAnimation: any;
   

  constructor(public login: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(_data => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
       
    });
  }

  logout() {
    this.login.logOut();
    window.location.reload();
  }

  // Method to trigger the animation
  triggerAnimation() {
    this.staggeredAnimation = 'trigger';
  }
  isGeneralUser(): boolean {
    return this.login.getUserRole() === 'General USER';
  }
}
