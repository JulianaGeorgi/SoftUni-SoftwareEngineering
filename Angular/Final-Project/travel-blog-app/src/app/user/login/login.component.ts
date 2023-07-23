import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { DEFAULT_EMAIL_DOMAINS } from "src/app/shared/constants";
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';
import { User } from 'src/app/types/user';
import { TipService } from 'src/app/travel-tip/tip.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(
    private userService: UserService,
    private tipService: TipService,
    private router: Router,
    private httpClient: HttpClient,
    private MatSnackBar: MatSnackBar) {
  }


  login(form: NgForm): void {

    this.httpClient
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`,
        { ...form.value, returnSecureToken: true }
      )
      .subscribe({
        next: (response: any) => {
          this.MatSnackBar.open("Login successful :)", "Great!", {
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'custom-snackbar',
          })
          this.userService.setUserData(form.value.email, form.value.username, response.localId);
          this.router.navigate(['/profile']);
        },

        error: (error) => {
          let errorMessage = "Login unsuccessful :(";

          this.MatSnackBar.open(errorMessage, 'Try again', {
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'custom-snackbar',
          });
        }
      });
  }
}
