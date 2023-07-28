import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'
import { appEmailValidator } from 'src/app/shared/validators/email/email.validator';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { matchPasswordsValidator } from 'src/app/shared/validators/email/match.passwords.validator';
import { HttpClient } from '@angular/common/http';
import { MatSnackBarComponent } from 'src/app/shared/mat-snack-bar/mat-snack-bar.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  // Reactive form
  form = this.formBuilder.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    email: ["", [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],],
    passGroup: this.formBuilder.group(
      {
        password: ["", [Validators.required, Validators.minLength(5)]],
        rePassword: ["", [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator("password", "rePassword")],
      }
    ),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBarComponent,
    private userService: UserService
  ) { }

  onRegister(): void {
    if (this.form.invalid) {
      return;
    }

    let email = this.form.value.email;
    let password = this.form.value.passGroup?.password;

    this.userService.register(email, password)
      .subscribe({
        next: (response) => {
          this.form.reset();

          let confirmMessage = "Your account was successfully created :)";
          this.snackBar.openSnackBar(confirmMessage, 'Great!');

          this.router.navigate(['/user/login']);
        },
        error: (error) => {
          let errorMessage = `Registration unsuccessful :(`;
          this.snackBar.openSnackBar(errorMessage, 'Try again');
        }
      });
  }
}
