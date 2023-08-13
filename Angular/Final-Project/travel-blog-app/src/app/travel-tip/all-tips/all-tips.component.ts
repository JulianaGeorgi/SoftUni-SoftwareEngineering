import { Component } from '@angular/core';
import { TipService } from '../tip.service';
import { Tip } from 'src/app/types/tip';

@Component({
  selector: 'app-all-tips',
  templateUrl: './all-tips.component.html',
  styleUrls: ['./all-tips.component.css']
})
export class AllTipsComponent {

  allTips: {[tipId: string]: Tip;} = {}

  constructor(
    private tipService: TipService,
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
        complete: () => {
          console.log("All tips were successfully fetched from the database.");
        }
      });
  }
}


