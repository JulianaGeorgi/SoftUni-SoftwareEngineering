import { Component, OnInit } from '@angular/core';
import { TipService } from '../travel-tip/tip.service';
import { Observable } from 'rxjs';
import { featuredUserId } from '../shared/constants';
import { Tip } from '../types/tip';

@Component({
  selector: 'app-travel-tips',
  templateUrl: './travel-tips.component.html',
  styleUrls: ['./travel-tips.component.css']
})
export class TravelTipsComponent implements OnInit{

  featuredTips: { [key: string]: { [key: string]: any } }= {};

  constructor(
    private tipService: TipService
  ) { }

  ngOnInit(): void {
    this.tipService.getAllFeaturedTips(featuredUserId)
      .subscribe({
        next: (tips) => {
          this.featuredTips = tips;
          console.log(this.featuredTips);
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
