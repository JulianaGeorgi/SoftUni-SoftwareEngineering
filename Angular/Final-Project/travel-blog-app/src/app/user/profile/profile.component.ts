import { Component, OnInit } from '@angular/core';
import { TipService } from 'src/app/travel-tip/tip.service';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { Tip } from 'src/app/types/tip';
import { Router } from '@angular/router';
import { User } from 'src/app/types/user'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData: User | undefined;
  userId!: string;

  userTipCollection$!: Observable<any>
  userTipCollection: { [key: string]: { [key: string]: Tip } } = {};

  constructor(
    private tipService: TipService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.userData = this.userService.getUserData();

    if (this.userData === undefined) {
      this.router.navigate(['user/login']);
    } else {
      this.userId = this.userData?.userId!;

      this.userTipCollection$ = this.tipService.getTipsByUser(this.userId);
      
      this.userTipCollection$
        .subscribe((userTips) => {
          this.userTipCollection = userTips;
        })
    }
  }
}
