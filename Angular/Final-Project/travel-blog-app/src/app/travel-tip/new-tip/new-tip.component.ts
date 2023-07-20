import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TipService } from '../tip.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-new-tip',
  templateUrl: './new-tip.component.html',
  styleUrls: ['./new-tip.component.css']
})
export class NewTipComponent {

  userData : any = this.userService!.getUserData();
  userDataObject = JSON.parse(this.userData);
  userId = this.userDataObject.userId;

  constructor(
    private tipService: TipService,
    private userService: UserService){
  }

  newTipSubmitHandler(form: NgForm) :void {

    if(form.invalid){
      return;
    }
    this.tipService.submitNewTip(this.userId, form.value.tipTitle, form.value.authorName, form.value.imageUrl, form.value.tipContent)
    // TODO: navigate to tip page
    // TODO : add submission confirmation
  }
}
