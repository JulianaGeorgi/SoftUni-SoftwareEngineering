import { Component, OnInit } from '@angular/core';
import { TipService } from '../travel-tip/tip.service';
import { featuredUserId } from '../shared/constants';
import { Tip } from '../types/tip';

@Component({
  selector: 'app-featured-tips',
  templateUrl: './featured-tips.component.html',
  styleUrls: ['./featured-tips.component.css']
})
export class FeaturedTipsComponent implements OnInit {

  featuredTips: {[tipId: string]: Tip;} = {};
  readonly featuredUserId = featuredUserId;

  constructor(
    private tipService: TipService
  ) { }

  ngOnInit(): void {

    this.tipService.getTipsByUser(featuredUserId)
      .subscribe({
        next: (tips) => {
          this.featuredTips = tips;
        },
        error: (err) => {
          console.error(`Error: ${err}`);
        },
        complete: () => {
          console.log("All featured tips were successfully fetched from the database.");
        }
      });
  }
}
