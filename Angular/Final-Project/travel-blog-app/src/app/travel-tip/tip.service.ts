import { Injectable } from '@angular/core';
import { Database, ref, onValue } from '@angular/fire/database';
import { push, remove } from 'firebase/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TipService {

  constructor(
    private database: Database,
  ) { }

  submitNewTip(userId: string | null, tipTitle: string, authorName: string, imageUrl: string, tipContent: string) {
    
    const newTipRef = push(ref(this.database, 'traveltips/' + userId), {
      tipTitle: tipTitle,
      authorName: authorName,
      imageUrl: imageUrl,
      tipContent: tipContent
    });

    const newTipKey = newTipRef.key;

    //TODO: add error handling - if key cannot be retrieved
    return newTipKey;
  }

  getAllTips(): Observable <any> {

    const databaseRef = ref(this.database, 'traveltips');

    return new Observable((obs) => {
      onValue(databaseRef, (snapshot: any) => {
        const tips = snapshot.val();
        obs.next(tips); // next param - callback f -> gets executed every time the next method returns a value
        obs.complete();
      });
    })
  }

  getAllFeaturedTips(userId: string): Observable<any> {

    const databaseRef = ref(this.database, `traveltips/${userId}`);

    return new Observable((obs) => {
      onValue(databaseRef, (snapshot: any) => {
        const tips = snapshot.val();
        obs.next(tips);
        obs.complete();
      });
    })
  }

  getOneTip(userId: string, tipId: string): Observable<any> {

    const databaseRef = ref(this.database, `traveltips/${userId}/${tipId}`);
    
    return new Observable((obs) => {
      
      onValue(databaseRef, (snapshot: any) => {
        const tip = snapshot.val();
        obs.next(tip);
        // if (snapshot && snapshot.exists()) {
        //   return tip;
        // } else {
        //   console.log("Tip not found.");
        //   return null;
        // }
      });
    })
  }

  deleteTip(userId: string | null, tipId: string | null) {

    const tipRef = ref(this.database, `traveltips/${userId}/${tipId}`);

    remove(tipRef).then(() => {
      console.log("Tip successfully deleted from the database.");
    });
  }
}