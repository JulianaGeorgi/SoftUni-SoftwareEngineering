import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database, ref, set, onValue } from '@angular/fire/database';
import { push } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class TipService {

  constructor(private database: Database, private httpClient: HttpClient) { }

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


  getAllTips(): void {
    const databaseRef = ref(this.database, 'traveltips');
    onValue(databaseRef, (snapshot: any) => {
      // console.log(snapshot.val());
    });
  }

  getOneTip(tipId: string) {
    const databaseRef = ref(this.database, 'traveltips/' + tipId);
    onValue(databaseRef, (snapshot) => {
      console.log(snapshot.val());
    });
  }

}
