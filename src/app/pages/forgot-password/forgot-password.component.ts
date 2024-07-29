// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrls: ['./forgot-password.component.css']
// })
// export class ForgotPasswordComponent {

// }
// forgot-password.component.ts// forgot-password.component.ts
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string= '';

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ForgotPasswordComponent>
  ) {}

  onSubmit() {
    if (!this.email) {
      this.snackBar.open('Email is required', 'Close', { duration: 3000 });
      return;
    }

    this.loginService.forgotPassword(this.email).subscribe(
      (response: any) => {
        this.snackBar.open(response.message, 'Close', { duration: 3000 });
        this.dialogRef.close();
      },
      (error) => {
      //   console.error('Error sending password reset link:', error);
      //   this.snackBar.open('An error occurred while sending the password reset link.', 'Close', { duration: 3000 });
      // 
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        console.error('Error sending password reset link:', error.error.message);
        this.snackBar.open('An error occurred while sending the password reset link.', 'Close', { duration: 3000 });
      } else {
        // Server-side error
        console.error('Error sending password reset link:', error);
        if (error.status === 400 && error.error) {
          this.snackBar.open(error.error, 'Close', { duration: 3000 }); // Display backend error message
        } else {
          this.snackBar.open('An unexpected error occurred.', 'Close', { duration: 3000 });
        }
      }
      }
    );
  }
}
