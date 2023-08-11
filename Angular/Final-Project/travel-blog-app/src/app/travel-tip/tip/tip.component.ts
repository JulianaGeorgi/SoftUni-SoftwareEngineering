import { Component, OnInit } from '@angular/core';
import { TipService } from '../tip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/user.service';
import { Tip } from 'src/app/types/tip';
import { MatSnackBarComponent } from 'src/app/shared/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})


export class TipComponent implements OnInit {

  tip$!: Observable<Tip>;
  tip: Tip = {
    tipTitle: '',
    authorName: '',
    imageUrl: '',
    tipContent: ''
  }
  userId: string | null = this.route.snapshot.paramMap.get('userId');
  tipId: string | null = this.route.snapshot.paramMap.get('id');
  // tipId: string | null = "23457899"; // test error

  showUpdatePost: boolean = false;

  constructor(
    private tipService: TipService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router, 
    private snackBar: MatSnackBarComponent
  ) { }

  showUpdatePostTip(show: boolean) {
    this.showUpdatePost = show;
  }
  
  get isOwner(): boolean {
    return this.userService.isOwner(this.userId);
  }

  deleteTip(): void {
    this.tipService.deleteTip(this.userId, this.tipId);

    const confirmMessage = "Tip deleted.";
    this.snackBar.openSnackBar(confirmMessage, "Cool!");

    this.router.navigate(['/home']);
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
          this.router.navigate(['/404'], { skipLocationChange: true }); // to not update the url
        },
        complete: () => {
          console.log("Tip was successfully fetched from the database :)");
        }
      });
  }

}

