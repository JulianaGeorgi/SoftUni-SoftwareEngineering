import { Component, OnInit } from '@angular/core';
import { TipService } from '../travel-tip/tip.service';
import { featuredUserId } from '../shared/constants';
import { Tip } from '../types/tip';

@Component({
  selector: 'app-travel-tips',
  templateUrl: './travel-tips.component.html',
  styleUrls: ['./travel-tips.component.css']
})
export class TravelTipsComponent implements OnInit{

  featuredTips: { [key: string]: { [key: string]: Tip } }= {};
  readonly featuredUserId = featuredUserId;  

  constructor(
    private tipService: TipService
  ) { }

  ngOnInit(): void {
    this.tipService.getAllFeaturedTips(featuredUserId)
      .subscribe({
        next: (tips) => {
          this.featuredTips = tips;
        },
        error: (err) => {
          console.error(`Error: ${err}`);
        },
      });

    // this.featuredTips$! = this.tipService.getAllFeaturedTips(featuredUserId);

    // this.featuredTips$.subscribe((tipsData: any) => {
    //   this.featuredTipsTest =  Object.values(tipsData);
    //   console.log(this.featuredTipsTest);
    // });

  }
}
