import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { DEFAULT_EMAIL_DOMAINS } from "src/app/shared/constants";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { MatSnackBarComponent } from 'src/app/shared/mat-snack-bar/mat-snack-bar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(
    private userService: UserService,
    private router: Router,
    private httpClient: HttpClient,
    private snackBar: MatSnackBarComponent) {
  }

  onLogin(form: NgForm): void {

    this.userService.login(form.value.email, form.value.password)
      .subscribe({
        next: (response: any) => {
          let confirmMessage = "Login successful :)";
          this.snackBar.openSnackBar(confirmMessage,'Great!');

          this.userService.setUserData(form.value.email, form.value.username, response.localId);

          this.router.navigate(['/profile']);
        },

        error: (error) => {
          const errorMessage = "Login unsuccessful :(";
          this.snackBar.openSnackBar(errorMessage,'Try again');
        }
      });
  }
}
