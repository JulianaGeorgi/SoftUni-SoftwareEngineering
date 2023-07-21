import { Component } from '@angular/core';
import { TipService } from '../travel-tip/tip.service';
import { Observable } from 'rxjs';
import { featuredUserId } from '../shared/constants';

@Component({
  selector: 'app-travel-tips',
  templateUrl: './travel-tips.component.html',
  styleUrls: ['./travel-tips.component.css']
})
export class TravelTipsComponent{

  featuredTips$!: Observable<any>;

  constructor(
    private tipService: TipService
  ) {}
  
  ngOnInit() : void {
   

    this.featuredTips$! = this.tipService.getAllFeaturedTips(featuredUserId);
    
    this.featuredTips$.subscribe((tipsData: any) => {
      console.log(tipsData);
    });
  }
  
  
}
