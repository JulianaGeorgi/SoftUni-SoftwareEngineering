import { Component, OnInit } from '@angular/core';
import { TipService } from '../tip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/user/user.service';
import { Tip } from 'src/app/types/tip';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  tip$!: Observable<any>;
  tip: Tip = {
    tipTitle: '',
    authorName: '',
    imageUrl: '',
    tipContent: ''
  }
  userId: string | null = this.route.snapshot.paramMap.get('userId');
  tipId: string | null = this.route.snapshot.paramMap.get('id');
  // tipId: string | null = "23457899";

  showUpdatePost: boolean = false;

  constructor(
    private tipService: TipService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  get isOwner(): boolean {
    return this.userService.isOwner(this.userId);
  }

  deleteTip(): boolean {
    this.tipService.deleteTip(this.userId, this.tipId);
    this.router.navigate(['/home']);
    return true;
  }

  onEditTip(tip: Tip) {
    this.showUpdatePost = true;
  }

  ngOnInit(): void {

    this.tip$ = this.tipService.getOneTip(this.userId, this.tipId);
    this.tip$
      .subscribe({
        next: (tip) => {
          this.tip = tip;
        },
        error: (err) => {
          console.error("Sorry, tip not found :(");
          // this.router.navigate(['notfound']);
        },
        complete: () => {
          console.log("Tip was successfully fetched from the database :)");
        }
      });
  }
}

