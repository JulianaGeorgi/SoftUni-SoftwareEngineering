import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TipService } from '../tip.service';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-tip',
  templateUrl: './new-tip.component.html',
  styleUrls: ['./new-tip.component.css']
})
export class NewTipComponent {

  userData: any = this.userService!.getUserData();
  userDataObject = JSON.parse(this.userData);
  userId = this.userDataObject.userId;

  constructor(
    private tipService: TipService,
    private userService: UserService,
    private router: Router) {
  }

  newTipSubmitHandler(form: NgForm): void {

    if (form.invalid) {
      return;
    }
    const tipId = this.tipService.submitNewTip(this.userId, form.value.tipTitle, form.value.authorName, form.value.imageUrl, form.value.tipContent);

    console.log(tipId);
    // TODO: navigate to tip page
    this.router.navigate([`traveltips/${tipId}`]);

    //   userData : any = this.userService!.getUserData();
    // userDataObject = JSON.parse(this.userData);
    // userId = this.userDataObject.userId;

    // TODO : add submission confirmation
  }
}
