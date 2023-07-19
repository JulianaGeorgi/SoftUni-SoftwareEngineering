import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'
import { appEmailValidator } from 'src/app/shared/validators/email.validator';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { matchPasswordsValidator } from 'src/app/shared/validators/match.passwords.validator';
import { HttpClient } from '@angular/common/http';

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

  constructor(private formBuilder: FormBuilder, private router: Router, private httpClient: HttpClient) { }

  register(): void {
    if (this.form.invalid) {
      return;
    } else {
      this.httpClient
        .post(
          'https://travel-blog-bab80-default-rtdb.europe-west1.firebasedatabase.app/users.json',
          this.form.value
        )
        .subscribe(
          response =>
            console.log(response));
      this.form.reset();
      this.router.navigate(['/login']);
    }
  }
}
