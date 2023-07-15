import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'
import { appEmailValidator } from 'src/app/shared/validators/email.validator';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { matchPasswordsValidator } from 'src/app/shared/validators/match.passwords.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.formBuilder.group({
    email: ["", [Validators.required, Validators.minLength(5)]],
    username: ["", [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    phone: [""],
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

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  register(): void {
    if (this.form.invalid) {
      return;
    }
  }
}
