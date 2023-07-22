import { Component } from '@angular/core';
import { TipService } from '../travel-tip/tip.service';


@Component({
  selector: 'app-travel-tips',
  templateUrl: './travel-tips.component.html',
  styleUrls: ['./travel-tips.component.css']
})
export class TravelTipsComponent {

  allTips: any[] = [];

  constructor(
    private tipService: TipService
  ) { }

  ngOnInit(): void {
    this.tipService.getAllTips()
      .subscribe({
        next: (tips) => {

          for (let userId in tips) { // looping the object with users - userId's(k) and (v->tipId)

            for (const tipId in tips[userId]) { // looping the object with tipsId's - tipId's(k) and (v->tip-properties)
              tips[userId][tipId].userId = userId; // saving the userId as a property of the tip
            }

            this.allTips = { ...this.allTips, ...tips[userId] } // merging the different users tips in one object with all tips
          }
        },
        error: (err) => {
          console.error(`Error: ${err}`);
        },
      });
  }
}
