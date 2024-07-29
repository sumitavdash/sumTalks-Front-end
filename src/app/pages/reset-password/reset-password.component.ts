// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-reset-password',
//   templateUrl: './reset-password.component.html',
//   styleUrls: ['./reset-password.component.css']
// })
// export class ResetPasswordComponent {

// }
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.resetForm = this.formBuilder.group({
      newPassword: ['', [
        Validators.required,
        Validators.minLength(8),
        this.validatePasswordStrength
      ]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  onSubmit() {
    if (this.resetForm.invalid) {
      return;
    }

    const token: string | null = this.route.snapshot.queryParamMap.get('token');

    if (!token) {
      console.error('Token is null or undefined');
      return;
    }

    const newPassword = this.resetForm.get('newPassword')?.value;

    this.loginService.resetPassword(token, newPassword).subscribe(
      (response: any) => {
        console.log(response);
        this.snackBar.open(response.message, 'Close', { duration: 3000 });
        this.router.navigate(['/login']);
      },
      error => {
        console.error(error);
        this.snackBar.open('An error occurred while resetting password', 'Close', { duration: 3000 });
      }
    );
  }

  private validatePasswordStrength(control: AbstractControl): { [key: string]: boolean } | null {
    const value: string = control.value;

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numericRegex = /[0-9]/;
    const specialCharacterRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    if (
      !uppercaseRegex.test(value) ||
      !lowercaseRegex.test(value) ||
      !numericRegex.test(value) ||
      !specialCharacterRegex.test(value)
    ) {
      return { 'passwordStrength': true };
    }

    return null;
  }

  private passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return newPassword === confirmPassword ? null : { 'passwordMismatch': true };
  }
}
