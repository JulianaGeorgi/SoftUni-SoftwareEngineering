import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { DEFAULT_EMAIL_DOMAINS } from "src/app/shared/constants";
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
    private snackBar: MatSnackBarComponent) {
  }

  onLogin(form: NgForm): void {
    
    this.userService.login(form.value.email, form.value.password)
      .subscribe({
        next: (response: any) => {
          console.log(response)
          const confirmMessage = "Login successful :)";
          this.snackBar.openSnackBar(confirmMessage,'Great!');

          this.userService.setUserData(form.value.email, form.value.username, response.localId);

          this.router.navigate(['/user/profile']);
        },

        error: (error) => {
          if(error.error.error.message == "USER_DISABLED"){
            let errorMessage = "Account disabled. Please contact the administrator.";
            this.snackBar.openSnackBar(errorMessage,'Got it!');
          } else {
            let errorMessage = "Login unsuccessful :(";
            this.snackBar.openSnackBar(errorMessage,'Try again');
          }
        }
      });
  }
}
