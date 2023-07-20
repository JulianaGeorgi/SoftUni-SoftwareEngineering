import { Component, OnInit } from '@angular/core';
import { TipService } from '../tip.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit{

  tip$!: Observable<any>;

  constructor(
    private tipService: TipService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const tip = this.tip$ = this.route.params.pipe(
      map((params) => params['id']), // Extract the post ID from the route parameters
      switchMap(async (tipId) => this.tipService.getOneTip(tipId)) // Fetch the post using the post ID
    );

    console.log(tip);
  }
}
