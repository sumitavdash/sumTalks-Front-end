// import { Component } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { Router } from '@angular/router';
// import { LoginService } from 'src/app/services/login.service';
// import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
// import { MatDialog } from '@angular/material/dialog';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent {
//   loginData: any = {
//     password: '',
//     email: '',
//   };

//   constructor(
//     private snackBar: MatSnackBar,
//     private login: LoginService,
//     private router: Router,
//     private dialog: MatDialog
//   ) {}

//   onSubmit() {
//     if (!this.loginData.email) {
//       this.snackBar.open('Email is required', 'Close', {
//         duration: 3000,
//       });
//       return;
//     }

//     if (!this.loginData.password) {
//       this.snackBar.open('Password is required', 'Close', {
//         duration: 3000,
//       });
//       return;
//     }

//     this.login.generateToken(this.loginData).subscribe(
//       (data: any) => {
//         console.log('Success:', data);
//         // Store token and handle login logic
//         this.login.loginUser(data.token);
//         this.login.getCurrentUser().subscribe(
//           (user: any) => {
//             this.login.setUser(user);
//             console.log('Current user:', user);

//             // Redirect based on user role
//             if (this.login.getUserRole() === 'ADMIN') {
//               this.router.navigate(['admin']);
//             } else {
//               this.router.navigate(['user-dashboard']);
//             }
//             this.login.loginStatusSubject.next(true);
//           },
//           (error) => {
//             console.error('Error fetching current user:', error);
//             // Handle error fetching current user
//             this.snackBar.open(
//               'Error fetching user details. Please try again.',
//               'Close',
//               {
//                 duration: 3000,
//               }
//             );
//           }
//         );
//       },
//       (error) => {
//         console.error('Error generating token:', error);
//         let errorMessage = 'An error occurred. Please try again.';

//         if (error.status === 401) {
//           errorMessage = 'Invalid email or password. Please try again.';
//         } else if (error.status === 500) {
//           errorMessage = 'Server error. Please try again later.';
//         } else if (error.error && error.error.message) {
//           errorMessage = error.error.message; // Use specific message from backend
//         }

//         this.snackBar.open(errorMessage, 'Close', {
//           duration: 3000,
//         });
//       }
//     );
//   }

//   openForgotPasswordDialog() {
//     const dialogRef = this.dialog.open(ForgotPasswordComponent, {
//       width: '400px',
//     });

//     dialogRef.afterClosed().subscribe((result) => {
//       console.log('The dialog was closed');
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData: any = {
    password: '',
    email: '',
  };

  constructor(
    private snackBar: MatSnackBar,
    private login: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Check if redirected due to session expiry
    this.route.queryParams.subscribe((params) => {
      if (params['sessionExpired']) {
        this.snackBar.open(
          'Your session has expired. Please log in again.',
          'Close',
          {
            duration: 3000,
          }
        );
      }
    });
  }

  onSubmit() {
    if (!this.loginData.email) {
      this.snackBar.open('Email is required', 'Close', {
        duration: 3000,
      });
      return;
    }

    if (!this.loginData.password) {
      this.snackBar.open('Password is required', 'Close', {
        duration: 3000,
      });
      return;
    }

    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user: any) => {
            this.login.setUser(user);

            if (this.login.getUserRole() === 'ADMIN') {
              this.router.navigate(['admin']);
            } else {
              this.router.navigate(['user-dashboard']);
            }
            this.login.loginStatusSubject.next(true);
          },
          (error) => {
            this.snackBar.open(
              'Error fetching user details. Please try again.',
              'Close',
              {
                duration: 3000,
              }
            );
          }
        );
      },
      (error) => {
        let errorMessage = 'An error occurred. Please try again.';
        if (error.status === 401) {
          errorMessage = 'Invalid email or password. Please try again.';
        } else if (error.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        } else if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        this.snackBar.open(errorMessage, 'Close', {
          duration: 3000,
        });
      }
    );
  }

  openForgotPasswordDialog() {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
