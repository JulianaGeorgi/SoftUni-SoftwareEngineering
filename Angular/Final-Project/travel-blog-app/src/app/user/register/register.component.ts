import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'
import { appEmailValidator } from 'src/app/shared/validators/email.validator';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { matchPasswordsValidator } from 'src/app/shared/validators/match.passwords.validator';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  form = this.formBuilder.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    email: [
      "",
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    ],
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
    private httpClient: HttpClient, 
    private MatSnackBar: MatSnackBar,
    ) { }

  register(): void {
    if (this.form.invalid) {
      return;

    }

    let email = this.form.value.email; 
    let password = this.form.value.passGroup?.password;

    this.httpClient
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`,
        { email, password, returnSecureToken: true }
      )
      .subscribe({
        next: (response) => {
        console.log(response);
        this.form.reset();
        this.MatSnackBar.open("Yey! Account successfully created :)", "Great!", {
          // verticalPosition: 'top',
          // horizontalPosition: 'center',
          panelClass: 'custom-snackbar',
        })
        this.router.navigate(['/login']);
        }, 

        error: (error) => {
          let errorMessage = `Registration unsuccessful :(`;

          this.MatSnackBar.open(errorMessage, 'Try again', {
            // verticalPosition: 'top',
            // horizontalPosition: 'center',
            panelClass: 'custom-snackbar',
          });
        }
      });
  }
}
