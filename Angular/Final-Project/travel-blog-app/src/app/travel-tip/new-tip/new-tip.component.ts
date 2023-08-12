import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TipService } from '../tip.service';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { MatSnackBarComponent } from 'src/app/shared/mat-snack-bar/mat-snack-bar.component';
import { User } from 'src/app/types/user'

@Component({
  selector: 'app-new-tip',
  templateUrl: './new-tip.component.html',
  styleUrls: ['./new-tip.component.css']
})

export class NewTipComponent implements OnInit {
  imageUrl: string[] = [];
  userData: User | undefined;
  userId!: string;

  constructor(
    private tipService: TipService,
    private userService: UserService,
    private router: Router, 
    private snackBar: MatSnackBarComponent) {
  }

  ngOnInit(): void {
    
    this.userData = this.userService.getUserData();

    if (this.userData === undefined) {
      this.router.navigate(['user/login']);
    } else {
      this.userId = this.userData.userId!;
    }
  }

  newTipSubmitHandler(form: NgForm): void {

    if (form.invalid) {
      return;
    }
    const tipId = this.tipService.submitNewTip(this.userId, form.value.tipTitle, form.value.authorName, form.value.imageUrl, form.value.tipContent);

    const confirmMessage = "Tip posted successfully.";
    this.snackBar.openSnackBar(confirmMessage,'Great!');

    this.router.navigate([`traveltips/all/${this.userId}/${tipId}`]);
  }
}
