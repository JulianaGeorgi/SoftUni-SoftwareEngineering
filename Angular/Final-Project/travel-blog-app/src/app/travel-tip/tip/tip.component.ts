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

  tip$: Tip = {
    tipTitle: '',
    authorName: '',
    imageUrl: '',
    tipContent: ''
  } 
  userId: string | null = this.route.snapshot.paramMap.get('userId');
  tipId: string | null = this.route.snapshot.paramMap.get('id');
  // tipId: string | null = "23457899";
  
  

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

  ngOnInit(): void {

    this.tipService.getOneTip(this.userId, this.tipId)
    .subscribe({
      next: (tip) => {
        this.tip$ = tip;
        console.log(this.tip$);
      },
      error: (err) => {
        console.error("Sorry, tip not found :(");
        //TODO: Add error page and render here
      },
      complete: () => {
        console.log("Tip was successfully fetched from the database :)");
      }
    });

    // this.tip$ = combineLatest([this.route.params]).pipe(
    //   map(([params]) => {
    //     const userId = params['userId']; // Read the userId from route parameters
    //     const tipId = params['id']; // Read the id from route parameters
    //     return { userId, tipId }; // Combine both parameters into an object
    //   }),
    //   switchMap( ({ userId, tipId }) => from(this.tipService.getOneTip(userId, tipId))),
    //   map((val: any) => {
    //     return val; 
    //   })
    // );
  }
}

