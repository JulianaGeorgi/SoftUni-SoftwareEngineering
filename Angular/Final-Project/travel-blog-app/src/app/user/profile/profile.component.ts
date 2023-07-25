import { Component, OnInit } from '@angular/core';
import { TipService } from 'src/app/travel-tip/tip.service';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { Tip } from 'src/app/types/tip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData: any = this.userService!.getUserData();
  userDataObject = JSON.parse(this.userData);
  userId = this.userDataObject.userId;

  userTipCollection$!: Observable<any>
  userTipCollection: { [key: string]: { [key: string]: Tip } } = {};

  constructor(
    private tipService: TipService,
    private userService: UserService,
    private router: Router
  ) {}


  ngOnInit(): void {
  
    this.userTipCollection$ = this.tipService.getTipsByUser(this.userId);
    this.userTipCollection$
      .subscribe((userTips) => {
        this.userTipCollection = userTips;
        console.log(userTips);
      })

  }
}
