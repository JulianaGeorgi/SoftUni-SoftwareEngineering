import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database, ref, set, onValue } from '@angular/fire/database';
import { getDatabase, child, get, push, remove } from 'firebase/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TipService {

  constructor(
    private database: Database,
    private httpClient: HttpClient,
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
        obs.next(tips);
        // obs.complete();
      });
    })
  }

  getAllFeaturedTips(userId: string): Observable<any> {
    const databaseRef = ref(this.database, `traveltips/${userId}`);
    return new Observable((obs) => {
      onValue(databaseRef, (snapshot: any) => {
        const tips = snapshot.val();
        obs.next(tips);
        // obs.complete();
      });
    })
  }

  getOneTip(userId: string, tipId: string): Promise<any> {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `traveltips/${userId}/${tipId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          return (snapshot.val());
        } else {
          console.log("Error :( Please try again later.");
        }
      }).catch((error) => {
        console.error(error);
      });
  }

  deleteTip(userId: string | null, tipId: string | null) {
    console.log(userId, tipId)
    const db = getDatabase();
    const tipRef = ref(db, `traveltips/${userId}/${tipId}`);
    remove(tipRef).then(() => {
      console.log("tip removed");
    });
  }
}

//TODO: Clean & organize better code - remove repetitions
