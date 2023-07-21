import { Component, OnInit } from '@angular/core';
import { TipService } from '../tip.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  tip$!: Observable<any>;
  userId: string | null = this.route.snapshot.paramMap.get('userId');

  constructor(
    private tipService: TipService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  get isOwner(): boolean {
    return this.userService.isOwner(this.userId);
  }

  ngOnInit(): void {

    this.tip$ = combineLatest([this.route.params]).pipe(
      map(([params]) => {
        const userId = params['userId']; // Read the userId from route parameters
        const tipId = params['id']; // Read the id from route parameters
        return { userId, tipId }; // Combine both parameters into an object
      }),
      switchMap(async ({ userId, tipId }) => this.tipService.getOneTip(userId, tipId).then(function(val) { return val}))
    );
    
    this.tip$.subscribe(
      (data: any) => {
        // console.log(data); // Handle the emitted data here
      }
    );

  }
}

